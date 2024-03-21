// "use client";
import { DragEventHandler, MouseEventHandler } from "react";
import TodoCard from "./todo-list-card";
import data from "../../lib/data.json";
import Timer from "./timer";
import { fetchTasks } from "../../lib/data";

//it's a react custom timer hook
// import { useStopwatch } from "react-timer-hook";
export default async function WorkingTask({
  onDrop,
  onDragOver,
  workingOn,
  compliteTask,
}: {
  onDrop: Function;
  onDragOver: DragEventHandler;
  workingOn: string | undefined;
  compliteTask: MouseEventHandler;
}) {
  // const { totalSeconds, seconds, minutes, hours, start, pause, reset } =
  //   useStopwatch({ autoStart: false });
  const tasks = await fetchTasks();
  let workingTask = tasks.find((item) => item.task_id === workingOn);
  //start the timer and doing task
  function drop(e: React.DragEvent) {
    const target = e.target as Element;
    target.classList.remove("dragonwork");
    onDrop(e);
    // reset();
  }
  // if (seconds === 1 && workingOn !== undefined) {
  //   data.cards[
  //     workingOn - 1
  //   ].start = `${new Date().getHours()}:${new Date().getMinutes()}`;
  // }
  //pausing the time and make the task complited
  function doneTask(e: React.MouseEvent) {
    // if (workingOn !== undefined) {
    //    data.cards[workingOn - 1].duration = `${
    //      minutes + hours * 60 < 10 ? 0 : ""
    //    }${minutes + hours * 60}:${seconds < 10 ? 0 : ""}${seconds}`;
    //   data.cards[
    //     workingOn - 1
    //   ].end = `${new Date().getHours()}:${new Date().getMinutes()}`;
    // }
    compliteTask(e);
    // reset();
    // pause();
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
      {/* {workingOn && (
        <PomoTimer minutes={minutes} seconds={seconds} hours={hours} />
      )} */}
      <div className="flex items-center justify-between m-2">
        <p>working on</p>
        {/* <p className="text-xs">
          {hours < 10 && 0}
          {hours}:{minutes < 10 && 0}
          {minutes}:{seconds < 10 && 0}
          {seconds}
        </p> */}
        <Timer />
      </div>
      <div className="mt-8">
        {workingTask && <TodoCard data={[workingTask]} isdrag={false} />}
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
