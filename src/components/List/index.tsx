import React from 'react';

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
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((data, index) => (
          <li key={index}>
            <h3>{data.task}</h3>
            <span>{data.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default List;