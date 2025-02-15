import { useRef, useState } from 'react';

import classes from './AddProject.module.css';
import Modal from './Modal';

export default function AddProject({ onAdd, onSave }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const date = useRef();
  // const [warning, setWarning] = useState();

  function handleSaveProject() {
    const enteredTitle = title.current.value.trim();
    const enteredDesc = description.current.value.trim();
    const enteredDate = date.current.value;

    if (enteredTitle && enteredDesc && enteredDate) {
      onSave({title: enteredTitle, description: enteredDesc, date: enteredDate});
    } else {
      // setWarning('Please enter a Title, Description, and Due Date.');
      modal.current.open();
    }
  }

  return (
    <>
      <Modal ref={modal}>
        <h2>Invalid Input</h2>
        <p className={classes.warning}>Please enter a Title, Description, and Due Date.</p>
      </Modal>
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
        {/* {warning && <section><label className={classes.warning}>{warning}</label></section>} */}
      </article>
    </>
  )
}
