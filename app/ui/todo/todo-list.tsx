import TodoCard from "./todo-list-card";
import data from "../../lib/data.json";
import { cardData } from "@/app/lib/definitions";

export default function TodoList({
  onDragStart,
  handleDropDown,
  todo,
  showTaskInfo,
}: {
  onDragStart: Function;
  handleDropDown: Function;
  todo: cardData[];
  showTaskInfo: Function;
}) {
  //delete working on data from todolist
  return (
    <div className="bg-bodyBox rounded-2xl todolistbox col-span-2 row-span-5 p-2 overflow-scroll scrolbar">
      <p className="m-2">Tasks</p>
      {Array.from({ length: todo.length }, (_, i) => (
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
