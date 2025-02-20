import classes from './Task.module.css';

export default function Task({ title, onDelete }) {
  return (
    <li className={classes.task}>
      <span>{title}</span>
      <p>
        <button className="pale icon" onMouseDown={() => onDelete(title)}>
          <span className="material-symbols-outlined">task_alt</span> {/* Complete */}
        </button>
      </p>
    </li>
  )
}
