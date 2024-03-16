import TodoCard from "./todo-list-card";
import data from "../../lib/data.json";
import { cardData } from "@/app/lib/definitions";

export default function DoneTasks({
  doneTasks,
  showTaskInfo,
}: {
  doneTasks: Array<number>;
  showTaskInfo?: Function;
}) {
  const selectedTasks: cardData[] = [];
  doneTasks.forEach((e) => {
    let item = data.cards.find((item) => item.id === e);
    item != undefined && selectedTasks.push(item);
  });
  return (
    <div className="bg-bodyBox rounded-2xl row-span-3 row-start-3 col-span-2 col-start-3 p-2 overflow-scroll scrolbar donelistbox">
      <p className="m-2">done tasks</p>
      {Array.from({ length: selectedTasks.length }, (_, i) => (
        <TodoCard
          key={i}
          showTaskInfo={showTaskInfo}
          duration={selectedTasks[i].duration}
          isdrag={false}
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
