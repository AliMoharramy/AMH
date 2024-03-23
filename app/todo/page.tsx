import MainTodo from "../ui/todo/main";
import { fetchTasks } from "../lib/data";

export default async function TodoPage() {
  const tasks = await fetchTasks();
  return (
    <div className=" text-white bg-black min-h-screen">
      <MainTodo tasks={tasks} />
    </div>
  );
}
