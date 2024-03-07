"use client";
import DoneTasks from "./done-tasks";
import InfoBox from "./info-box";
import TodoList from "./todo-list";
import WorkingTask from "./workin-task";
import data from "../../lib/data.json";
import { useState } from "react";

export default function MainTodo() {
  const [workingOn, setWorkingOn] = useState<number>();
  const [doneTasks, setDoneTasks] = useState<number[]>([]);

  function compliteTask() {
    workingOn && setDoneTasks([...doneTasks, workingOn]);
    setWorkingOn(undefined);
  }

  function handleOnDrag(e: React.DragEvent, id: number) {
    const target = e.target as Element;
    e.dataTransfer.setData("checkId", String(id));
    target.classList.add("ondragItem");
  }
  function handleDropDown(e: React.DragEvent) {
    const target = e.target as Element;
    target.classList.remove("ondragItem");
  }
  function handleOnDrop(e: React.DragEvent) {
    const checkId = e.dataTransfer.getData("checkId") as string;
    setWorkingOn(Number(checkId));
  }
  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-px pt-12  w-11/12 mx-auto">
      <TodoList onDragStart={handleOnDrag} handleDropDown={handleDropDown} />
      <DoneTasks doneTasks={doneTasks} />
      <WorkingTask
        workingOn={workingOn}
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
        compliteTask={compliteTask}
      />
      <InfoBox />
      <div className="bg-bodyBox rounded-s-2xl p-2 col-start-3 col-span-2 row-span-2">
        middle part
      </div>
      <div className="bg-bodyBox rounded-e-2xl rounded-t-2xl p-2 row-span-5 col-start-5 row-start-1">
        right part
      </div>
    </div>
  );
}
