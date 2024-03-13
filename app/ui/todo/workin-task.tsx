"use client";
import { DragEventHandler, MouseEventHandler } from "react";
import TodoCard from "./todo-list-card";
import data from "../../lib/data.json";
//it's a react custom timer hook
import { useStopwatch } from "react-timer-hook";
import { createPrivateKey } from "crypto";
export default function WorkingTask({
  onDrop,
  onDragOver,
  workingOn,
  compliteTask,
}: {
  onDrop: Function;
  onDragOver: DragEventHandler;
  workingOn: number | undefined;
  compliteTask: MouseEventHandler;
}) {
  const { totalSeconds, seconds, minutes, hours, start, pause, reset } =
    useStopwatch({ autoStart: false });
  let workingTask = data.cards.find((item) => item.id === workingOn);
  //start the timer and doing task
  function drop(e: React.DragEvent) {
    const target = e.target as Element;
    target.classList.remove("dragonwork");
    onDrop(e);
    reset();
  }
  //pausing the time and make the task complited
  function doneTask(e: React.MouseEvent) {
    if (workingOn !== undefined) {
      data.cards[workingOn - 1].duration = `${minutes + hours * 60 < 10 && 0}${
        minutes + hours * 60
      }:${seconds < 10 ? 0 : ""}${seconds}`;
    }
    compliteTask(e);
    pause();
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
      className="wobox bg-bodyBox relative rounded-2xl p-2 col-start-2 row-start-1 row-span-2 flex flex-col"
      onDrop={(e) => drop(e)}
      onDragOver={onDragOver}
      onDragOverCapture={(e) => dragOverit(e)}
      onDragLeave={(e) => dragleaveit(e)}
    >
      <div className="flex items-center justify-between m-2">
        <p>working on</p>
        <p className="text-xs">
          {hours < 10 && 0}
          {hours}:{minutes < 10 && 0}
          {minutes}:{seconds < 10 && 0}
          {seconds}
        </p>
      </div>
      <div className="mt-8">
        {workingTask && <TodoCard data={[workingTask]} isdrag={false} />}
      </div>
      <button
        className="absolute -bottom-3 left-1/3 ml-3 bg-todoNav px-8 py-1 rounded-full"
        onClick={(e) => doneTask(e)}
      >
        &#8595;
      </button>
    </div>
  );
}
