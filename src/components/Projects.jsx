import classes from './Projects.module.css';

export default function Projects({ onAdd, onSelect, projects, selectedProject }) {
  return (
    <nav>
      <h3 className={`title ${classes.title}`}>Your Projects</h3>
      <button onClick={onAdd}>+ Add Project</button>
      <ul>
        { projects.map(project => (
          <li className={project.id == selectedProject ? 'highlighted' : ''}
            onClick={() => onSelect(project)} key={project.id}>{project.title}</li>
        )) }
      </ul>
    </nav>
  )
}
