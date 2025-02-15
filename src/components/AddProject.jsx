import { useState } from 'react';

import classes from './AddProject.module.css';

export default function AddProject({ onAdd, onSave }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [warning, setWarning] = useState();

  function handleSaveProject() {
    if (title && description && date) {
      onSave(title, description, date);
    } else {
      setWarning('Please enter a title, description, and due date.');
    }
  }

  if (warning && title && description && date) {
    setWarning('');
  }

  return (
    <article className={classes.article}>
      <section>
        <h2>New Project</h2>
      </section>
      <section>
        <label htmlFor="title" className="title">Title</label>
        <input id="title" type="text" value={title} onChange={event => setTitle(event.target.value)} />
      </section>
      <section>
        <label htmlFor="description" className="title">Description</label>
        <textarea id="description" rows="3" value={description} onChange={event => setDescription(event.target.value)}></textarea>
      </section>
      <section className={classes.columns}>
        <div>
          <label htmlFor="date" className="title">Due Date</label>
          <input id="date" type="date" value={date} onChange={event => setDate(event.target.value)} />
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
