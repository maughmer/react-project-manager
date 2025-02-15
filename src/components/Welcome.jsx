import logo from '../assets/no-projects.png';
import classes from './Welcome.module.css';

export default function Welcome({ onAdd }) {
  return (
    <article className={classes.article}>
      <img src={logo} width="70" height="72" alt="Clipboard" />
      <h2>No Project Selected</h2>
      <p className={classes.subtitle}>Select a project or get started with a new one.</p>
      <button onClick={onAdd}>Create new project</button>
    </article>
  )
}
