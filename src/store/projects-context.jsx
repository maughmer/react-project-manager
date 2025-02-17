import { createContext, useState } from "react";

export const ProjectContext = createContext({
  projects: [],
  currentProject: undefined,
  addProject: () => {},
  saveProject: () => {},
  selectProject: () => {},
  updateProject: () => {},
  deleteProject: () => {},
});

export default function ProjectContextProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(undefined);

  function handleAddProject(add = true) {
    setCurrentProject(null);
  }
  
  function handleSaveProject(projectData) {
    const newProject = { ...projectData, id: Date.now(), tasks: [] };
    setProjects(current => [...current, newProject]);
    setCurrentProject(newProject);
  }

  function handleSelectProject(project) {
    setCurrentProject(project);
  }

  function handleUpdateProject(tasks) {
    setProjects(current => current.map(proj => {
      if (proj.id != currentProject.id) {
        return proj;
      } else {
        const project = { ...proj, tasks };
        setCurrentProject(project);
        return project;
      }
    }));
  }

  function handleDeleteProject(id) {
    setCurrentProject(undefined);
    setProjects(current => current.filter(proj => proj.id != id));
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