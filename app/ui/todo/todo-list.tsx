import TodoCard from "./todo-list-card";
import data from "../../lib/data.json";

export default function TodoList({ onDragStart }: { onDragStart: Function }) {
  return (
    <div className="bg-bodyBox rounded-2xl todolistbox row-span-5 p-2 overflow-scroll scrolbar">
      <p className="m-2">Tasks</p>
      {Array.from({ length: data.cards.length }, (_, i) => (
        <TodoCard
          key={i}
          onDragStart={onDragStart}
          data={[
            {
              rank: data.cards[i].rank,
              id: data.cards[i].id,
              text: data.cards[i].text,
            },
          ]}
        />
      ))}
      {/* <TodoCard data={[{ rank: "A", id: 1, text: "hello mother" }]} />
      <TodoCard data={[{ rank: "A", id: 1, text: "hello mother" }]} />
      <TodoCard data={[{ rank: "A", id: 1, text: "hello mother" }]} />
      <TodoCard data={[{ rank: "A", id: 1, text: "hello mother" }]} />
      <TodoCard data={[{ rank: "A", id: 1, text: "hello mother" }]} />
      <TodoCard data={[{ rank: "A", id: 1, text: "hello mother" }]} />
      <TodoCard data={[{ rank: "A", id: 1, text: "hello mother" }]} /> */}
    </div>
  );
}
