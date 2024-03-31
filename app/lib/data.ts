import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { tasksRaw, products } from "./definitions";

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
export async function updateTaskTiming() {
  try {
    await sql`
      UPDATE tasks
      SET start = '1:48', endtime = '2:30'
      WHERE rank = 'A'
    `;
  } catch (error) {
    return { message: "Database Error: Failed to Update task." };
  }
}

// UPDATE tasks
// SET start = '14:25'
// WHERE task_id = '88ae2076-88fe-4e6c-b08b-cf41e828cbca'
