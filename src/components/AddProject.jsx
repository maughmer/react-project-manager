import { useRef, useState } from 'react';

import classes from './AddProject.module.css';

export default function AddProject({ onAdd, onSave }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const [warning, setWarning] = useState();

  function handleSaveProject() {
    if (title.current && description.current && date.current) {
      onSave({title: title.current.value, description: description.current.value, date: date.current.value});
    } else {
      setWarning('Please enter a title, description, and due date.');
    }
  }

  if (warning && title.current && description.current && date.current) {
    setWarning('');
  }

  return (
    <article className={classes.article}>
      <section>
        <h2>New Project</h2>
      </section>
      <section>
        <label className="title">Title</label>
        <input type="text" ref={title} />
      </section>
      <section>
        <label className="title">Description</label>
        <textarea rows="3" ref={description}></textarea>
      </section>
      <section className={classes.columns}>
        <div>
          <label className="title">Due Date</label>
          <input type="date" ref={date} />
        </div>
        <div>
          <button type="button" className="pale" onClick={() => onAdd(false)}>Cancel</button>
          <button type="button" onClick={handleSaveProject}>Save</button>
        </div>
      </section>
      {warning && <section><label className={classes.warning}>{warning}</label></section>}
    </article>
  )
}
