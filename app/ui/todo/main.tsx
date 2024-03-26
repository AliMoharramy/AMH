"use client";
import DoneTasks from "./done-tasks";
import TodoList from "./todo-list";
import WorkingTask from "./workin-task";
import { useState } from "react";
import { rubikGemstones } from "../fonts";
import { tasksRaw } from "../../lib/definitions";

export default function MainTodo({ tasks }: { tasks: Array<tasksRaw> }) {
  const [workingOn, setWorkingOn] = useState<string>("");
  const [doneTasks, setDoneTasks] = useState<string[]>([]);
  const [addTask, setAddTask] = useState<boolean>(false);

  function compliteTask(e: string) {
    // move task from working on to doneTask and clear working
    workingOn && setDoneTasks([...doneTasks, workingOn]);
    setWorkingOn("");
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
    setWorkingOn(checkId);
  }
  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  return (
    <div className="grid grid-cols-8 grid-rows-5 gap-1 pt-12  w-11/12 mx-auto">
      <TodoList
        onDragStart={handleOnDrag}
        handleDropDown={handleDropDown}
        addTask={addTask}
        setAddTask={setAddTask}
        tasks={tasks}
      />
      <DoneTasks doneTasks={doneTasks} tasks={tasks} />
      <WorkingTask
        workingOn={workingOn}
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
        compliteTask={compliteTask}
        tasks={tasks}
      />

      <div className="bg-bodyBox rounded-2xl p-2 row-span-5 col-start-8 row-start-1 relative overflow-hidden">
        <div className="bg-white p-10 absolute rounded-full middlemove"></div>
        <div className="bg-white p-10 absolute rounded-full middlemoverev"></div>
        <div className="absolute w-full h-full glassyitem"></div>
        <p
          className={`${rubikGemstones.className} absolute text-black left-1/5 text-6xl [writing-mode:vertical-lr] w-full h-full top-0 left-0 text-center flex justify-center items-center`}
        >
          WORK HARD
        </p>
      </div>
    </div>
  );
}
