import TodoCard from "./todo-list-card";
import { tasksRaw } from "@/app/lib/definitions";

export default async function DoneTasks({
  doneTasks,
  tasks,
}: {
  doneTasks: Array<string>;
  tasks: Array<tasksRaw>;
}) {
  const selectedTasks: tasksRaw[] = [];
  doneTasks.forEach((e) => {
    let item = tasks.find((item) => item.task_id === e);
    item != undefined && selectedTasks.push(item);
  });
  return (
    <div className="bg-bodyBox rounded-2xl row-span-3 row-start-3 col-span-2 col-start-3 p-2 overflow-scroll scrolbar donelistbox">
      <p className="m-2">done tasks</p>
      {Array.from({ length: selectedTasks.length }, (_, i) => (
        <TodoCard
          key={i}
          duration={selectedTasks[i].duration}
          isdrag={false}
          start={selectedTasks[i].start}
          end={selectedTasks[i].endtime}
          data={[
            {
              rank: selectedTasks[i].rank,
              task_id: selectedTasks[i].task_id,
              title: selectedTasks[i].title,
              description: selectedTasks[i].description,
            },
          ]}
        />
      ))}
    </div>
  );
}
