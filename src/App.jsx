import { useState } from "react";

import Projects from "./components/Projects";
import Welcome from "./components/Welcome";
import AddProject from "./components/AddProject";
import Project from "./components/Project";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [addingProject, setAddingProject] = useState(false);
  const [project, setProject] = useState();

  function handleAddProject(add = true) {
    setProject(null);
    setAddingProject(add);
  }

  function handleSaveProject(projectData) {
    const newProject = { ...projectData, id: Date.now(), tasks: [] };
    setProjects(current => [...current, newProject]);
    handleAddProject(false);
    setProject(newProject);
  }

  function handleSelectProject(project) {
    setProject(project);
  }

  function handleUpdateProject(tasks) {
    setProject(current => ({ ...current, tasks }));
    setProjects(current => current.map(proj => {
      if (proj.id != project.id) {
        return proj;
      } else {
        return { ...proj, tasks };
      }
    }));
  }

  function handleDeleteProject(id) {
    setProject(null);
    setAddingProject(false);
    setProjects(current => current.filter(proj => proj.id != id));
  }

  let content;

  if (project) {
    content = <Project project={project} onUpdate={handleUpdateProject} onDelete={handleDeleteProject} />;
  } else if (addingProject) {
    content = <AddProject onAdd={handleAddProject} onSave={handleSaveProject} />;
  } else {
    content = <Welcome onAdd={handleAddProject} />;
  }

  return (
    <main>
      <Projects onAdd={handleAddProject} onSelect={handleSelectProject} projects={projects} selectedProject={project?.id} />
      {content}
    </main>
  )
}
