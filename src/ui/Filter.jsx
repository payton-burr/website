import { useEffect } from "react";
import projects from "../fixtures/projects.json";

function Filter({ category, setCategory, setFilteredProjects }) {
  useEffect(() => {
    if (category === "all") {
      setFilteredProjects(projects);
    } else {
      const filter = projects.filter((project) =>
        project.tags.includes(category)
      );
      setFilteredProjects(filter);
    }
  }, [category]);
  return (
    <div>
      <button onClick={() => setCategory("all")}>All</button>
      <button onClick={() => setCategory("javascript")}>JavaScript</button>
      <button onClick={() => setCategory("react")}>React</button>
    </div>
  );
}

export default Filter;
