import TodoCard from "./todo-list-card";
import data from "../../lib/data.json";
import { cardData } from "@/app/lib/definitions";

export default function DoneTasks({ doneTasks }: { doneTasks: Array<number> }) {
  const selectedTasks: cardData[] = [];
  doneTasks.forEach((e) => {
    let item = data.cards.find((item) => item.id === e);
    item != undefined && selectedTasks.push(item);
  });
  return (
    <div className="bg-bodyBox rounded-2xl row-span-3 row-start-3 col-start-2 p-2 overflow-scroll scrolbar donelistbox">
      <p className="m-2">done tasks</p>
      {Array.from({ length: selectedTasks.length }, (_, i) => (
        <TodoCard
          key={i}
          isdrag={false}
          duration={"23:44"}
          data={[
            {
              rank: selectedTasks[i].rank,
              id: selectedTasks[i].id,
              text: selectedTasks[i].text,
            },
          ]}
        />
      ))}
    </div>
  );
}
