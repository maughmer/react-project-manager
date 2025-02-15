import classes from './Projects.module.css';

export default function Projects({ onAdd, onSelect, projects }) {
  return (
    <nav>
      <h3 className={`title ${classes.title}`}>Your Projects</h3>
      <button onClick={onAdd}>+ Add Project</button>
      <ul>
        { projects.map(project => (
          <li onClick={() => onSelect(project)} key={project.id}>{project.title}</li>
        )) }
      </ul>
    </nav>
  )
}
