import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { tasksRaw } from "./definitions";

export async function fetchTasks() {
  noStore();
  try {
    const data = await sql<tasksRaw>`
        SELECT tasks.task_id, tasks.title, tasks.description, tasks.rank, tasks.duration, tasks.start, tasks.endtime
        FROM tasks`;

    const alltasks = data.rows.map((invoice) => ({
      ...invoice,
    }));
    return alltasks;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the tasks.");
  }
}
