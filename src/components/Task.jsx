import classes from './Task.module.css';

export default function Task({ title, onDelete }) {
  return (
    <li className={classes.task}>
      <span>{title}</span>
      <button className="pale" onClick={() => onDelete(title)}>Complete</button>
    </li>
  )
}
