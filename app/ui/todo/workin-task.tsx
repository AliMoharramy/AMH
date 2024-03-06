import { DetailedHTMLProps, DragEventHandler } from "react";
import TodoCard from "./todo-list-card";
import data from "../../lib/data.json";

export default function WorkingTask({
  onDrop,
  onDragOver,
  workingOn,
}: {
  onDrop: DragEventHandler;
  onDragOver: DragEventHandler;
  workingOn: number | undefined;
}) {
  let workingTask = data.cards.find((item) => item.id === workingOn);
  console.log(workingOn);
  return (
    <div
      className="bg-bodyBox rounded-2xl p-2 col-start-2 row-start-1 row-span-2 flex flex-col"
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <p className="m-2">working on</p>
      <div className="mt-8">{/* <TodoCard data={{ workingTask }} /> */}</div>
    </div>
  );
}
