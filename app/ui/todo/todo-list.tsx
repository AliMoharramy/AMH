import TodoCard from "./todo-list-card";
import data from "../../lib/data.json";

interface cardData {
  text: string;
  rank: string;
  id: number;
}

export default function TodoList({
  onDragStart,
  handleDropDown,
  todo,
}: {
  onDragStart: Function;
  handleDropDown: Function;
  todo: cardData[];
}) {
  //delete working on data from todolist
  return (
    <div className="bg-bodyBox rounded-2xl todolistbox row-span-5 p-2 overflow-scroll scrolbar">
      <p className="m-2">Tasks</p>
      {Array.from({ length: todo.length }, (_, i) => (
        <TodoCard
          key={i}
          isdrag
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
