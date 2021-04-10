import { useEffect, useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      const req = await fetch("https://api.github.com/users/ceyhunmelek/repos");
      const res = await req.json();
      return res || [];
    };
    getProjects().then(setProjects);
  }, []);
  return <div className="projects">
    <p className="title">Projects</p>
    { projects.length > 0 && projects.map(project => <Project project={project} />) }
    { projects.length === 0 && <i className="fas fa-3x fa-spinner spinner" /> }
  </div>;
};
export default Projects;