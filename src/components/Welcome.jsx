import { useContext } from 'react';

import { ProjectContext } from '../store/projects-context';
import classes from './Welcome.module.css';
import logo from '../assets/no-projects.png';

export default function Welcome() {
  const { addProject } = useContext(ProjectContext);

  return (
    <article className={classes.article}>
      <img src={logo} width="70" height="72" alt="Clipboard" />
      <h2>No Project Selected</h2>
      <p className={classes.subtitle}>Select a project or get started with a new one.</p>
      <button onClick={addProject}>Create new project</button>
    </article>
  )
}
