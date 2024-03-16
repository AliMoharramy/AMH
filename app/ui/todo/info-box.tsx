import data from "../../lib/data.json";
export default function InfoBox({
  taskInfo,
  showTaskInfo,
}: {
  taskInfo: number;
  showTaskInfo: Function;
}) {
  const taskData = data.cards.find((item) => item.id === taskInfo);
  return (
    <div className="bg-bodyBox p-2 col-span-3 row-span-3 row-start-2 col-start-5 justify-center flex items-center">
      <button className="px-8 py-5 bg-btcolor rounded-xl justify-center flex hover:bg-todoNav">
        New Task
      </button>
    </div>
  );
}
