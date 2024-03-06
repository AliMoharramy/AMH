import TodoCard from "./todo-list-card";

export default function DoneTasks() {
  return (
    <div className="bg-bodyBox rounded-2xl row-span-3 row-start-3 col-start-2 p-2 overflow-scroll scrolbar donelistbox">
      <p className="m-2">done tasks</p>
      {/* <TodoCard data={[{ rank: "A", place: 1 }]} /> */}
    </div>
  );
}
