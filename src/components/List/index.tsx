import React, { useState } from 'react';
import styles from './List.module.scss'
import Item from './Item';

function List() {
  const [tasks, setTasks] = useState([{
    task: 'React',
    time: '02:00:00'
  },
  {
    task: 'Javascript',
    time: '01:00:00'
  },
  {
    task: 'Typescript',
    time: '03:00:00'
  }
  ])
  return (
    <aside className={styles.taksList}>
      <h2 onClick={() => {
        setTasks([...tasks, { task: 'Estudar estado', time: '05:00:00' }])
      }}>Estudos do dia</h2>
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