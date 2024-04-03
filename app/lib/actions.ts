"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
export async function updateTaskTiming(
  id: number,
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
    console.error("Database Error:", error);
    throw new Error("Failed to Update task.");
  }
  revalidatePath("/todo");
}
