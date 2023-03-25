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
      <div className="flex justify-start flex-wrap">
        {filteredProjects.map((project) => {
          return <Project key={project.id}>{project.title}</Project>;
        })}
      </div> */}
    </div>
  );
}

export default ProjectList;
