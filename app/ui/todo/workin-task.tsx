import { DragEventHandler, MouseEventHandler } from "react";
import TodoCard from "./todo-list-card";
import data from "../../lib/data.json";

export default function WorkingTask({
  onDrop,
  onDragOver,
  workingOn,
  compliteTask,
}: {
  onDrop: DragEventHandler;
  onDragOver: DragEventHandler;
  workingOn: number | undefined;
  compliteTask: MouseEventHandler;
}) {
  let workingTask = data.cards.find((item) => item.id === workingOn);
  return (
    <div
      className="bg-bodyBox relative rounded-2xl p-2 col-start-2 row-start-1 row-span-2 flex flex-col"
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <p className="m-2">working on</p>
      <div className="mt-8">
        {workingTask && <TodoCard data={[workingTask]} isdrag={false} />}
      </div>
      <button
        className="absolute -bottom-3 left-1/3 ml-3 bg-todoNav px-8 py-1 rounded-full"
        onClick={compliteTask}
      >
        &#8595;
      </button>
    </div>
  );
}
