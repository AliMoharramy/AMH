import TodoCard from "./todo-list-card";

export default function TodoList() {
  return (
    <div className="bg-bodyBox rounded-2xl todolistbox row-span-5 p-2 overflow-scroll scrolbar">
      <p className="m-2">Tasks</p>
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </div>
  );
}
