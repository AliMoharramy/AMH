import data from "../../lib/data.json";
export default function InfoBox({
  taskInfo,
  showTaskInfo,
}: {
  taskInfo: number;
  showTaskInfo: Function;
}) {
  const taskData = data.cards.find((item) => item.id === taskInfo);
  console.log(taskInfo && taskData);
  return (
    <div className="bg-bodyBox rounded-2xl p-2 col-span-2 row-span-3 row-start-1 col-start-3">
      {taskInfo && (
        <>
          <p>id is : {taskData?.id}</p>
          <p>task is : {taskData?.text}</p>
          {taskData?.duration && (
            <p>duration to done this task is : {taskData?.duration}</p>
          )}
        </>
      )}
    </div>
  );
}
