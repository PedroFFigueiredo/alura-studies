import styles from './List.module.scss'
import Item from './Item';
import { ITasks } from '../../types/tasks';

interface Props {
  tasks: ITasks[],
  selectTask: (taskSelect: ITasks) => void
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={styles.taksList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map(data => (
          <Item
            selectTask={selectTask}
            key={data.id}
            {...data}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;