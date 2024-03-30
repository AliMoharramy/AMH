import { DragEventHandler } from "react";
import TodoCard from "./todo-list-card";
import Timer from "./timer";
import { tasksRaw } from "@/app/lib/definitions";
import { updateTaskTiming } from "@/app/lib/data";

export default function WorkingTask({
  onDrop,
  onDragOver,
  workingOn,
  compliteTask,
  tasks,
}: {
  onDrop: Function;
  onDragOver: DragEventHandler;
  workingOn: string | undefined;
  compliteTask(e: string): void;
  tasks: Array<tasksRaw>;
}) {
  let workingTask: tasksRaw | undefined = tasks.find(
    (item) => item.task_id === workingOn
  );
  //start the timer and doing task
  function drop(e: React.DragEvent) {
    const target = e.target as Element;
    target.classList.remove("dragonwork");
    onDrop(e);
  }
  function doneTask(e: React.MouseEvent) {
    let time = new Date();
    let doneTime = `${time.getHours()}:${time.getMinutes()}`;
    updateTaskTiming();
    compliteTask(doneTime);
  }
  function dragOverit(e: React.DragEvent) {
    const target = e.target as Element;
    target.classList[0] === "wobox" && target.classList.add("dragonwork");
  }
  function dragleaveit(e: React.DragEvent) {
    const target = e.target as Element;
    target.classList.remove("dragonwork");
  }

  return (
    <div
      className="wobox bg-bodyBox relative rounded-2xl p-2 col-start-3 col-span-2 row-start-1 row-span-2 flex flex-col"
      onDrop={(e) => drop(e)}
      onDragOver={onDragOver}
      onDragOverCapture={(e) => dragOverit(e)}
      onDragLeave={(e) => dragleaveit(e)}
    >
      <div className="flex items-center justify-between m-2">
        <p>working on</p>
        <Timer />
      </div>
      <div className="mt-8">
        {workingTask && (
          <TodoCard
            data={[
              {
                rank: workingTask.rank,
                task_id: workingTask.task_id,
                title: workingTask.title,
                description: workingTask.description,
              },
            ]}
            isdrag={false}
          />
        )}
      </div>
      <button
        className="absolute -bottom-5 left-0 right-0 ml-auto mr-auto bg-todoNav px-14 py-2 rounded-xl hover:bg-btcolor"
        onClick={(e) => doneTask(e)}
      >
        &#8595;
      </button>
    </div>
  );
}
