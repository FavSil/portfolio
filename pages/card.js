import Image from "next/image";
export default function Card({ project }) {
  return (
    <div className="flex flex-col p-4 bg-white rounded-md hover:shadow-lg ">
      <h2 className="text-lg font-bold">{project.title}</h2>
      <div className="flex-1 mt-2 flex flex-col gap-1">
        <img className="object-cover h-36 rounded-md" src={project.src} />
        <h3 className="mt-2 text-xs font-bold leading-right">
          {project.header}
        </h3>
        <p className="mt-1 text-xs"> {project.description}</p>
      </div>
      <hr className="  border-black/80 mx-auto" />
      <div className="mt-3 grid grid-cols-3 gap-1 items-end">
        <div className="col-span-3">
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
