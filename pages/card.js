import Image from "next/image";
import { AiOutlineLink } from "react-icons/ai";
export default function Card({ project }) {
  return (
    <div className="flex flex-col p-4 bg-white rounded-md hover:shadow-lg ">
      <a href={project.link} className="visited:text-purple-600">
        {project.active ? (
          <h2 className="text-lg font-bold underline">{project.title}</h2>
        ) : (
          <h2 className="text-lg font-bold">{project.title}</h2>
        )}
      </a>
      <div className="flex-1 mt-2 flex flex-col gap-1">
        <a href={project.link}>
          <img
            className="object-cover h-36 w-full rounded-md"
            src={project.src}
          />
        </a>
        <h3 className="mt-2 text-xs font-bold leading-right">
          {project.header}
        </h3>
        <p className="mt-1 text-xs"> {project.description}</p>
      </div>
      <hr className="  border-black/80 mx-auto" />
      <div className="mt-3 grid grid-cols-4 gap-1 align-">
        <div className="col-span-4">
          <h3 className="text-xs font-bold">Technologies</h3>
          <p className="mt-0.5 text-xs ">
            {[...project.technologies].join(" | ")}
          </p>
          <ul className="flex"></ul>
        </div>
      </div>
    </div>
  );
}
