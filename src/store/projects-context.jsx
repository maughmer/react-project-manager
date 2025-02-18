import { createContext, useState } from "react";

export const ProjectContext = createContext({
  projects: {},
  currentProject: undefined,
  addProject: () => {},
  saveProject: () => {},
  selectProject: () => {},
  updateProject: () => {},
  deleteProject: () => {},
});

export default function ProjectContextProvider({ children }) {
  const [projects, setProjects] = useState({});
  const [currentProject, setCurrentProject] = useState(undefined);

  function handleAddProject(add = true) {
    setCurrentProject(null);
  }
  
  function handleSaveProject(projectData) {
    const newProject = { ...projectData, id: Date.now(), tasks: [] };
    setProjects(current => ({ ...current, [newProject.id]: newProject }));
    setCurrentProject(newProject);
  }

  function handleSelectProject(project) {
    setCurrentProject(project);
  }

  function handleUpdateProject(tasks) {
    const updatedProject = { ...currentProject, tasks };
    setProjects(current => ({ ...current, [updatedProject.id]: updatedProject }));
    setCurrentProject(updatedProject);
  }

  function handleDeleteProject(id) {
    const updatedProjects = { ...projects };
    delete updatedProjects[id];
    setProjects(updatedProjects);
    setCurrentProject(undefined);
  }
  
  const ctxValue = {
    projects,
    currentProject,
    addProject: handleAddProject,
    saveProject: handleSaveProject,
    selectProject: handleSelectProject,
    updateProject: handleUpdateProject,
    deleteProject: handleDeleteProject,
  };

  return (
    <ProjectContext.Provider value={ctxValue}>
      {children}
    </ProjectContext.Provider>
  )
}