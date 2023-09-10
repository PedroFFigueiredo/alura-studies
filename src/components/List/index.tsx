import styles from './List.module.scss'
import Item from './Item';
import { ITasks } from '../../types/tasks';

function List({ tasks }: { tasks: ITasks[] }) {
  return (
    <aside className={styles.taksList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((data, index) => (
          <Item
            key={index}
            {...data}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;