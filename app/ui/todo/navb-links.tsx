import { Project } from "next/dist/build/swc";
import Link from "next/link";

interface navProjects {
  name: string;
  url: string;
}

export default function Navlinks({
  projects,
  active,
}: {
  projects: Array<navProjects>;
  active: number;
}) {
  return (
    <nav className="grid justify-center grid-cols-6 bg-todoNav px-5">
      {Array.from({ length: projects.length }, (_, i) => (
        <Link
          href={"./#"}
          key={i}
          className={`mt-2 py-2 grid justify-center ${
            i === active && "todo-active-nav"
          }`}
        >
          {projects[i].name}
        </Link>
      ))}
    </nav>
  );
}
