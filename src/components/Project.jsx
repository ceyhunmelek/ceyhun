const Project = ({ project }) => {
  console.log(project);
  return <div className="project">
    <p className="font-poppins title">{project.name}</p>
    { project.description && <p className="font-open-sans desc">{project.description}</p> }
  </div>;
};
export default Project;