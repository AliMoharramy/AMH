"use client";
import Navlinks from "../ui/todo/navb-links";
import DoneTasks from "../ui/todo/done-tasks";
import InfoBox from "../ui/todo/info-box";
import TodoList from "../ui/todo/todo-list";
import WorkingTask from "../ui/todo/workin-task";
import data from "..//lib/data.json";
import PomoTimer from "../ui/todo/pomoTimer";
import { useState } from "react";
import { rubikGemstones } from "../ui/fonts";
export default function TodoPage() {
  const [todo, setTodo] = useState(data.cards);
  const [workingOn, setWorkingOn] = useState<number>(NaN);
  const [doneTasks, setDoneTasks] = useState<number[]>([]);
  const [taskInfo, setTaskInfo] = useState<number>(NaN);
  const [fullPomp, setFullPomo] = useState<boolean>(false);

  function compliteTask() {
    // move task from working on to doneTask and clear working
    workingOn && setDoneTasks([...doneTasks, workingOn]);
    setWorkingOn(NaN);
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
    // clear working task from todo list
    setTodo(todo.filter((item) => item.id !== Number(checkId)));
  }
  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }
  //
  function showTaskInfo(e: number) {
    setTaskInfo(e);
  }
  return (
    <div className=" text-white bg-black min-h-screen">
      <Navlinks
        projects={[
          { name: "me", url: "/#" },
          { name: "yours", url: "./togo" },
        ]}
        active={0}
      />
      <div className="grid grid-cols-8 grid-rows-5 gap-px pt-12  w-11/12 mx-auto">
        <TodoList
          onDragStart={handleOnDrag}
          handleDropDown={handleDropDown}
          showTaskInfo={showTaskInfo}
          //send wokingOn to clear that task from todo list
          todo={todo}
        />
        <DoneTasks doneTasks={doneTasks} showTaskInfo={showTaskInfo} />
        <WorkingTask
          workingOn={workingOn}
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
          compliteTask={compliteTask}
        />
        {workingOn ? (
          <PomoTimer />
        ) : (
          <>
            <InfoBox taskInfo={taskInfo} showTaskInfo={showTaskInfo} />
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
          </>
        )}
      </div>
    </div>
  );
}
