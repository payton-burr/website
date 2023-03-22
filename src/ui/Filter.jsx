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

  const uniqueCategories = [
    ...new Set(projects.map((project) => project.tags).flat()),
  ];

  console.log(uniqueCategories);

  return (
    <div>
      <button onClick={() => setCategory("all")}>All</button>
      {uniqueCategories.map((category) => (
        <button key={category} onClick={() => setCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default Filter;
