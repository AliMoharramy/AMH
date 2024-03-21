import TodoCard from "./todo-list-card";
import data from "../../lib/data.json";
import { cardData } from "@/app/lib/definitions";
import { fetchTasks } from "../../lib/data";

export default async function DoneTasks({
  doneTasks,
}: {
  doneTasks: Array<string>;
}) {
  const tasks = await fetchTasks();
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
          duration={selectedTasks[i].duration}
          isdrag={false}
          start={selectedTasks[i].start}
          end={selectedTasks[i].end}
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
