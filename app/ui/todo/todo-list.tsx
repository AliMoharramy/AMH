import TodoCard from "./todo-list-card";
import data from "../../lib/data.json";
import { cardData } from "@/app/lib/definitions";
import clsx from "clsx";
import CreateTask from "./createTask";

export default function TodoList({
  onDragStart,
  handleDropDown,
  todo,
  showTaskInfo,
  setAddTask,
  addTask,
}: {
  onDragStart: Function;
  handleDropDown: Function;
  todo: cardData[];
  showTaskInfo: Function;
  setAddTask: Function;
  addTask: boolean;
}) {
  //delete working on data from todolist
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
        Array.from({ length: todo.length }, (_, i) => (
          <TodoCard
            key={i}
            isdrag
            showTaskInfo={showTaskInfo}
            onDragStart={onDragStart}
            ondragend={handleDropDown}
            data={[
              {
                rank: todo[i].rank,
                id: todo[i].id,
                text: todo[i].text,
              },
            ]}
          />
        ))}
    </div>
  );
}
