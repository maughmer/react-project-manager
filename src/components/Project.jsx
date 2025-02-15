import { useRef } from 'react';

import Task from './Task';
import classes from './Project.module.css';

export default function Project({ project, onUpdate, onDelete }) {
  const task = useRef();
  const date = new Date(project.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric'});

  function handleDeleteTask(deletedTask) {
    const tasks = project.tasks.filter(task => task !== deletedTask);
    onUpdate(tasks);
  }

  function handleAddTask() {
    const enteredTask = task.current.value;
    if (enteredTask.length > 0) {
      project.tasks.unshift(enteredTask);
      onUpdate(project.tasks);
      task.current.value = '';
    }
  }

  return (
    <article className={classes.article}>
      <section>
        <div className={classes.columns}>
          <h2 className={classes.title}>{project.title}</h2>
          <button type="button" className="pale" onClick={() => onDelete(project.id)}>Delete Task</button>
        </div>
        <p className={classes.subtitle}>{date}</p>
        <p className={classes.description}>{project.description}</p>
      </section>
      <section>
        <hr />
      </section>
      <section>
        <h2>Tasks</h2>
      </section>
      <section>
        <div className={classes.addTask}>
          <input type="text" ref={task} />
          <button type="button" className="pale" onClick={handleAddTask}>Add Task</button>
        </div>
      </section>
      <section>
        {project.tasks.length > 0 && <ul>
          { project.tasks.map(task => <Task title={task} onDelete={handleDeleteTask} key={task} />) }
        </ul>}
        {project.tasks.length == 0 && <p className={classes.subtitle}>This project does not yet have any tasks.</p>}
      </section>
    </article>
  )
}
