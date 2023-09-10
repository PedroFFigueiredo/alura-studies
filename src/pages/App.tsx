import { useState } from 'react';
import Form from '../components/Form/index';
import List from '../components/List';
import styles from './App.module.scss';
import Stopwatch from '../components/Stopwatch';
import { ITasks } from '../types/tasks';

function App() {
  const [tasks, setTasks] = useState<ITasks[] | []>([])
  const [select, setSelect] = useState<ITasks>();

  function selectTask(taskSelect: ITasks) {
    setSelect(taskSelect);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      select: task.id === taskSelect.id ? true : false,

    })));
  }

  function finishTask() {
    if (select) {
      setSelect(undefined);
      setTasks(oldTasks => oldTasks.map(task => {
        if (task.id === select.id) {
          return {
            ...task,
            select: false,
            complet: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <Stopwatch
        select={select}
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;
