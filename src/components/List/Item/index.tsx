import { ITasks } from '../../../types/tasks';
import styles from './Item.module.scss';

interface Props extends ITasks {
  selectTask: (taskSelect: ITasks) => void
}

export default function Item(
  {
    task,
    time,
    select,
    complet,
    id,
    selectTask
  }: Props) {
  return (
    <li
      className={`${styles.item} ${select ? styles.itemSelect : ''}`}
      onClick={() => selectTask(
        {
          task,
          time,
          select,
          complet,
          id
        }
      )}
    >
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  )
}