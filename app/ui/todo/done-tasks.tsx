import TodoCard from "./todo-list-card";
import data from "../../lib/data.json";

export default function DoneTasks({ doneTasks }: { doneTasks: Array<number> }) {
  const checked = [];
  return (
    <div className="bg-bodyBox rounded-2xl row-span-3 row-start-3 col-start-2 p-2 overflow-scroll scrolbar donelistbox">
      <p className="m-2">done tasks</p>
      {/* {doneTasks &&
        Array.from({ length: doneTasks.length }, (_, i) => findTask(i))} */}
      {/* <TodoCard data={[{ rank: "A", place: 1 }]} /> */}
    </div>
  );
}
