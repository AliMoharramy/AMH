import Navlinks from "../ui/todo/navb-links";
import MainTodo from "../ui/todo/main";
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
      <MainTodo />
    </div>
  );
}
