import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { tasksRaw, products } from "./definitions";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function fetchTasks() {
  noStore();
  try {
    const data = await sql<tasksRaw>`
        SELECT tasks.task_id, tasks.title, tasks.description, tasks.rank, tasks.duration, tasks.start, tasks.endtime
        FROM tasks`;

    const alltasks = data.rows.map((tasks) => ({
      ...tasks,
    }));
    return alltasks;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the tasks.");
  }
}
export async function fetchProducts() {
  noStore();
  try {
    const data = await sql<products>`
        SELECT products.product_id, products.name, products.size, products.cost, products.img
        FROM products`;

    const allproducts = data.rows.map((products) => ({
      ...products,
    }));
    return allproducts;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the products.");
  }
}
// export async function fetchUsers(){
//   noStore();
//   try{
//     const data = await sql<users>`
//     SELECT users.user_id, users
//     `
//   }
// }
export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, { algorithms: ["HS256"] });
  return payload;
}
const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);
export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}
export async function login(formData: FormData) {
  const user = {
    username: formData.get("username"),
    password: formData.get("password"),
  };
  const expires = new Date(Date.now() + 10 * 1000);
  const session = await encrypt({ user, expires });

  cookies().set("session", session, { expires, httpOnly: true });
}
export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
//reading from cookies
export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

// UPDATE tasks
// SET start = '14:25'
// WHERE task_id = '88ae2076-88fe-4e6c-b08b-cf41e828cbca'
