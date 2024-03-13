"use client";
import DoneTasks from "./done-tasks";
import InfoBox from "./info-box";
import TodoList from "./todo-list";
import WorkingTask from "./workin-task";
import data from "../../lib/data.json";
import { useState } from "react";

export default function MainTodo() {
  const [todo, setTodo] = useState(data.cards);
  const [workingOn, setWorkingOn] = useState<number>(NaN);
  const [doneTasks, setDoneTasks] = useState<number[]>([]);
  const [taskInfo, setTaskInfo] = useState<number>(NaN);

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
    <div className="grid grid-cols-5 grid-rows-5 gap-px pt-12  w-11/12 mx-auto">
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
      <InfoBox taskInfo={taskInfo} showTaskInfo={showTaskInfo} />
      <div className="bg-bodyBox rounded-s-2xl p-2 col-start-3 col-span-2 row-span-2">
        middle part
      </div>
      <div className="bg-bodyBox rounded-e-2xl rounded-t-2xl p-2 row-span-5 col-start-5 row-start-1">
        right part
      </div>
    </div>
  );
}
