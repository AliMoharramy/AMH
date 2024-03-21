import MainTodo from "../ui/todo/main";
import { fetchTasks } from "../lib/data";

export default async function TodoPage() {
  const tasks = await fetchTasks();
  return (
    // <div className=" text-white bg-black min-h-screen">
    //   {/* <Navlinks
    //     projects={[
    //       { name: "me", url: "/#" },
    //       { name: "yours", url: "./togo" },
    //     ]}
    //     active={0}
    //   /> */}
    //   <div className="grid grid-cols-8 grid-rows-5 gap-1 pt-12  w-11/12 mx-auto">
    //     <TodoList
    //       onDragStart={handleOnDrag}
    //       handleDropDown={handleDropDown}
    //       setAddTask={setAddTask}
    //       addTask={addTask}
    //     />
    //     <DoneTasks doneTasks={doneTasks} />
    //     <WorkingTask
    //       workingOn={workingOn}
    //       onDrop={handleOnDrop}
    //       onDragOver={handleDragOver}
    //       compliteTask={compliteTask}
    //     />
    //     {
    //       <div className="bg-bodyBox rounded-2xl p-2 row-span-5 col-start-8 row-start-1 relative overflow-hidden">
    //         <div className="bg-white p-10 absolute rounded-full middlemove"></div>
    //         <div className="bg-white p-10 absolute rounded-full middlemoverev"></div>
    //         <div className="absolute w-full h-full glassyitem"></div>
    //         <p
    //           className={`${rubikGemstones.className} absolute text-black left-1/5 text-6xl [writing-mode:vertical-lr] w-full h-full top-0 left-0 text-center flex justify-center items-center`}
    //         >
    //           WORK HARD
    //         </p>
    //       </div>
    //     }
    //   </div>
    // </div>
    <div className=" text-white bg-black min-h-screen">
      <MainTodo tasks={tasks} />
    </div>
  );
}
