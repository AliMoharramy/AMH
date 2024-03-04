import Navlinks from "../ui/todo/navb-links";
export default function todoPage() {
  return (
    <div>
      <Navlinks
        projects={[
          { name: "me", url: "/#" },
          { name: "yours", url: "./togo" },
        ]}
      />
      ok its good
    </div>
  );
}
