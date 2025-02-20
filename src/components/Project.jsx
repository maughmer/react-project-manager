import { useContext, useRef } from 'react';

import { ProjectContext } from '../store/projects-context';
import classes from './Project.module.css';
import Task from './Task';

export default function Project() {
  const { currentProject, updateProject, deleteProject } = useContext(ProjectContext);

  const task = useRef();
  const project = currentProject;
  const date = new Date(project.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric'});

  function handleDeleteTask(deletedTask) {
    const tasks = project.tasks.filter(task => task !== deletedTask);
    updateProject(tasks);
  }

  function handleAddTask() {
    const enteredTask = task.current.value;
    if (enteredTask.length > 0) {
      project.tasks.unshift(enteredTask);
      updateProject(project.tasks);
      task.current.value = '';
    }
  }

  return (
    <article className={classes.article}>
      <section>
        <div className={classes.columns}>
          <h2 className={classes.title}>{project.title}</h2>
          <button type="button" className="pale" onClick={() => deleteProject(project.id)}>Delete Task</button>
        </div>
        <p className={classes.subtitle}>{date}</p>
        <p className={classes.description}>{project.description}</p>
      </section>
      <hr />
      <section>
        <h2 style={{margin: 0}}>Tasks</h2>
        <div className={classes.addTask}>
          <input type="text" ref={task} />
          <button type="button" className="pale" onClick={handleAddTask}>Add Task</button>
        </div>
        <div>
          {project.tasks.length > 0 && <ul>
            { project.tasks.map(task => <Task title={task} onDelete={handleDeleteTask} key={task} />) }
          </ul>}
          {project.tasks.length === 0 && <p className={classes.subtitle}>This project does not yet have any tasks.</p>}
        </div>
      </section>
    </article>
  )
}
