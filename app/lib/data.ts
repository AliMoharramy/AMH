import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { tasksRaw, products, users } from "./definitions";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { EXPORT_DETAIL } from "next/dist/shared/lib/constants";

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
export async function fetchUsers() {
  noStore();
  try {
    const data = await sql<users>`
      SELECT users.user_id, users.email, users.password, users.name
      FROM users
      `;
    const allusers = data.rows.map((users) => ({
      ...users,
    }));
    return allusers;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the users.");
  }
}
// export async function getUser(email: string): Promise<users | any> {
//   try {
//     const user = await sql<users>`SELECT * FROM users WHERE email=${email}`;
//     return user.rows[0];
//   } catch {
//     console.log("Failed to fetch user:");
//     throw new Error("Failed to fetch user.");
//   }
// }
const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);
export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}
export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(key);
}
let expires: any;
export async function login(formData: FormData) {
  const allUsers = await fetchUsers();
  const user = {
    username: formData.get("username"),
    password: formData.get("password"),
  };
  if (
    allUsers.find((item) => item.email === user.username)?.password ===
    user.password
  ) {
    expires = new Date(Date.now() * 100 + 60 * 60 * 2);
    const session = await encrypt({ user, expires });
    cookies().set("session", session, { expires, httpOnly: true });
    redirect("/todo");
  }
}
export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  const parsed = await decrypt(session);
  //parsed.expires = new Date(Date.now() * 100 + 60 * 60 * 2);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: expires,
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

export function createTask(formData: FormData) {
  console.log(formData);
}
