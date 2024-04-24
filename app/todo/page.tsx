import MainTodo from "../ui/todo/main";
import { fetchTasks } from "../lib/data";
import CreateTask from "../ui/todo/createTask";

export default async function TodoPage() {
  const tasks = await fetchTasks();
  return (
    <div className=" text-white bg-black min-h-screen">
      <MainTodo tasks={tasks}>
        <CreateTask />
      </MainTodo>
    </div>
  );
}
