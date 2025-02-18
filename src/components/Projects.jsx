import { useContext } from 'react';

import { ProjectContext } from '../store/projects-context';
import classes from './Projects.module.css';

export default function Projects() {
  const { projects, currentProject, addProject, selectProject } = useContext(ProjectContext);

  const sortedProjects = Object.values(projects).sort((a, b) => a.title.localeCompare(b.title));

  return (
    <nav>
      <h3 className={`title ${classes.title}`}>Your Projects</h3>
      <button onClick={addProject}>+ Add Project</button>
      <ul>
        { sortedProjects.map(project => (
          <li className={project.id === currentProject?.id ? 'highlighted' : ''}
            onClick={() => selectProject(project)} key={project.id}>{project.title}</li>
        )) }
      </ul>
    </nav>
  )
}
