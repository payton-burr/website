import { useState } from "react";
import Filter from "./Filter";
import Project from "./Project";

function ProjectList() {
  const [category, setCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);

  return (
    <div>
      <Filter
        category={category}
        setCategory={setCategory}
        setFilteredProjects={setFilteredProjects}
      />
      <div className="flex flex-wrap justify-center">
        {filteredProjects.map(({ title, description, id, links }) => {
          return (
            <Project key={id}>
              <img
                src="/mountain.jpg"
                alt=""
                className="inline w-full rounded md:w-36 md:mr-4"
              />
              <div className="content">
                <p className="text-xl my-5 leading-5">{title}</p>
                <p className="text-sm my-3">{description}</p>
                <div>
                  {links.github} {links.preview}
                </div>
              </div>
            </Project>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectList;
