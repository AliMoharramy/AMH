import { Project } from "next/dist/build/swc";
import Link from "next/link";

interface navProjects {
  name: string;
  url: string;
}

export default function Navlinks({
  projects,
}: {
  projects: Array<navProjects>;
}) {
  return (
    <nav className="grid justify-center grid-cols-6 w-11/12 mx-auto bg-gray-500 rounded-2xl px-5">
      {Array.from({ length: projects.length }, (_, i) => (
        <Link href={"./#"} key={i} className="mt-2 py-2 grid justify-center">
          {projects[i].name}
        </Link>
      ))}
    </nav>
  );
}
