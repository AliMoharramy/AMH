import TodoCard from "./todo-list-card";
import { tasksRaw } from "@/app/lib/definitions";
import clsx from "clsx";
import CreateTask from "./createTask";

export default function TodoList({
  onDragStart,
  handleDropDown,
  setAddTask,
  addTask,
  tasks,
}: {
  onDragStart: Function;
  handleDropDown: Function;
  setAddTask: Function;
  addTask: boolean;
  tasks: Array<tasksRaw>;
}) {
  return (
    <div
      className={clsx(
        "bg-bodyBox rounded-2xl todolistbox col-span-2 row-span-5 p-2 overflow-scroll scrolbar "
      )}
    >
      {addTask && <CreateTask />}
      {!addTask && (
        <>
          <div className="flex items-center justify-between m-2 mb-4">
            <p>Tasks</p>
            <button
              onClick={(e) => setAddTask(true)}
              className="bg-todoNav p-1 px-3 rounded-xl text-lg hover:bg-btcolor"
            >
              +
            </button>
          </div>
        </>
      )}
      {!addTask &&
        Array.from({ length: tasks.length }, (_, i) => (
          <TodoCard
            key={i}
            isdrag
            onDragStart={onDragStart}
            ondragend={handleDropDown}
            data={[
              {
                rank: tasks[i].rank,
                task_id: tasks[i].task_id,
                title: tasks[i].title,
                description: tasks[i].description,
              },
            ]}
            duration={tasks[i].duration}
            start={tasks[i].start}
            end={tasks[i].endtime}
          />
        ))}
    </div>
  );
}
