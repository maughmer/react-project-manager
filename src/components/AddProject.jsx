import { useContext, useRef } from 'react';

import { ProjectContext } from '../store/projects-context';
import classes from './AddProject.module.css';
import Modal from './Modal';

export default function AddProject() {
  const { addProject, saveProject }= useContext(ProjectContext);
  
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleSaveProject() {
    const enteredTitle = title.current.value.trim();
    const enteredDesc = description.current.value.trim();
    const enteredDate = date.current.value;

    if (enteredTitle && enteredDesc && enteredDate) {
      saveProject({title: enteredTitle, description: enteredDesc, date: enteredDate});
    } else {
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
            <button type="button" className="pale" onClick={() => addProject(false)}>Cancel</button>
            <button type="button" onClick={handleSaveProject}>Save</button>
          </div>
        </section>
      </article>
    </>
  )
}
