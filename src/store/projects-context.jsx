import { createContext, useReducer } from "react";

export const ProjectContext = createContext({
  projects: {},
  currentProject: undefined,
  addProject: () => {},
  saveProject: () => {},
  selectProject: () => {},
  updateProject: () => {},
  deleteProject: () => {},
});

let count = 0;
const ReducerType = {
  ADD_PROJECT: count++,
  SAVE_PROJECT: count++,
  SELECT_PROJECT: count++,
  UPDATE_PROJECT: count++,
  DELETE_PROJECT: count++,
}

function projectsReducer(state, action) {
  if (action.type === ReducerType.ADD_PROJECT) {
    return { ...state, currentProject: null };
  }
  if (action.type === ReducerType.SAVE_PROJECT) {
    const newProject = { ...action.projectData, id: Date.now(), tasks: [] };
    const projects = { ...state.projects, [newProject.id]: newProject };
    return { ...state, projects, currentProject: newProject };
  }
  if (action.type === ReducerType.SELECT_PROJECT) {
    return { ...state, currentProject: action.project };
  }
  if (action.type === ReducerType.UPDATE_PROJECT) {
    const updatedProject = { ...state.currentProject, tasks: action.tasks };
    const projects = { ...state.projects, [updatedProject.id]: updatedProject };
    return { ...state, projects, currentProject: updatedProject };
  }
  if (action.type === ReducerType.DELETE_PROJECT) {
    const updatedProjects = { ...state.projects, [action.id]: null };
    delete updatedProjects[action.id];
    return { ...state, projects: updatedProjects, currentProject: undefined };
  }
  return state;
}

export default function ProjectContextProvider({ children }) {
  const [projectsState, setProjectsState] = useReducer(projectsReducer, { projects: {}, currentProject: undefined });

  function handleAddProject() {
    setProjectsState({ type: ReducerType.ADD_PROJECT })
  }
  
  function handleSaveProject(projectData) {
    setProjectsState({ type: ReducerType.SAVE_PROJECT, projectData });
  }

  function handleSelectProject(project) {
    setProjectsState({ type: ReducerType.SELECT_PROJECT, project });
  }

  function handleUpdateProject(tasks) {
    setProjectsState({ type: ReducerType.UPDATE_PROJECT, tasks });
  }

  function handleDeleteProject(id) {
    setProjectsState({ type: ReducerType.DELETE_PROJECT, id });
  }
  
  const ctxValue = {
    projects: projectsState.projects,
    currentProject: projectsState.currentProject,
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