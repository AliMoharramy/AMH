import DoneTasks from "../ui/todo/done-tasks";
import InfoBox from "../ui/todo/info-box";
import Navlinks from "../ui/todo/navb-links";
import TodoList from "../ui/todo/todo-list";
import WorkingTask from "../ui/todo/workin-task";
export default function todoPage() {
  return (
    <div className=" text-white bg-black min-h-screen">
      <Navlinks
        projects={[
          { name: "me", url: "/#" },
          { name: "yours", url: "./togo" },
        ]}
        active={0}
      />
      <div className="grid grid-cols-5 grid-rows-5 gap-px pt-4  w-11/12 mx-auto">
        <TodoList />
        <DoneTasks />
        <WorkingTask />
        <InfoBox />
        <div className="bg-bodyBox rounded-2xl p-2 row-start-4 row-span-2 col-start-2 col-span-2">
          bottom part
        </div>
        <div className="bg-bodyBox rounded-s-2xl p-2 col-start-4 row-span-2">
          middle part
        </div>
        <div className="bg-bodyBox rounded-e-2xl rounded-t-2xl p-2 row-span-5 col-start-5 row-start-1">
          right part
        </div>
      </div>
    </div>
  );
}
