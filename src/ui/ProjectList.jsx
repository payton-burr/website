import { useState } from "react";
import Filter from "./Filter";

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
      {filteredProjects.map((project) => {
        return <div key={project.id}>{project.title}</div>;
      })}
    </div>
  );
}

export default ProjectList;
