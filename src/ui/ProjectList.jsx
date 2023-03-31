import { useState } from "react";
import Filter from "./Filter";
import Project from "./Project";

function ProjectList() {
  const [category, setCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);

  return (
    <div>
      <h2>Coming Soon...</h2>
      <p>Building some new projects</p>
      {/* <Filter
        category={category}
        setCategory={setCategory}
        setFilteredProjects={setFilteredProjects}
      />
      <div>
        {filteredProjects.map((project) => {
          return (
            <Project key={project.id}>
              <img
                src="/mountain.jpg"
                alt=""
                className="inline w-full rounded md:w-36 md:mr-4"
              />
              <div className="content">
                <p className="text-xl my-5 leading-3">
                  An Above Average Experience
                </p>
                <p className="text-sm my-3">
                  Travel to the premiere mountain tops of New Zealand with our
                  guided tours. Take in the majestic scenary and witness beauty.
                </p>
                {project.links.github}
                {project.links.preview}
              </div>
            </Project>
          );
        })}
      </div> */}
    </div>
  );
}

export default ProjectList;
