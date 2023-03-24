import Button from "./Button";
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

  return (
    <div>
      <Button onClick={() => setCategory("all")}>All</Button>
      {uniqueCategories.map((category) => (
        <Button key={category} onClick={() => setCategory(category)}>
          {category}
        </Button>
      ))}
    </div>
  );
}

export default Filter;
