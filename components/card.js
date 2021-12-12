import Image from "next/image";
import { AiOutlineLink } from "react-icons/ai";
export default function Card({ project }) {
  return (
    <div className="flex flex-col p-4 bg-white rounded-md hover:shadow-lg ">
      {project.active ? (
        <a href={project.link}>
          <h2 className="text-lg font-bold underline decoration-orange-500 decoration-2 hover:bg-orange-400 hover:text-white hover:no-underline hover:rounded hover:px-1">
            {project.title}
          </h2>
        </a>
      ) : (
        <h2 className="text-lg font-bold">{project.title}</h2>
      )}
      <div className="flex-1 mt-2 flex flex-col gap-1">
        {project.active ? (
          <a href={project.link}>
            <img
              className="object-cover h-40 w-full rounded-md "
              src={project.src}
            />
          </a>
        ) : (
          <img
            className="object-cover h-40 w-full rounded-md "
            src={project.src}
          />
        )}
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
