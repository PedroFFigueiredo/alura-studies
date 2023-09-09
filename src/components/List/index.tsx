import React from 'react';
import styles from './List.module.scss'

function List() {
  const tasks = [{
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
  ]
  return (
    <aside className={styles.taksList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((data, index) => (
          <li key={index} className={styles.item}>
            <h3>{data.task}</h3>
            <span>{data.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default List;