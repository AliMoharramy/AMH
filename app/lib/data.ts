import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { tasksRaw } from "./definitions";

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
export async function updateTaskTiming(
  id: string,
  start: string,
  endtime: string
) {
  try {
    await sql`
      UPDATE tasks
      SET start = ${start}, endtime = ${endtime}
      WHERE task_id = ${id}
    `;
  } catch (error) {
    return { message: "Database Error: Failed to Update task." };
  }
}

// UPDATE tasks
// SET start = '14:25'
// WHERE task_id = '88ae2076-88fe-4e6c-b08b-cf41e828cbca'
