import { useState } from 'react';
import Form from '../components/Form/index';
import List from '../components/List';
import styles from './App.module.scss';
import Stopwatch from '../components/Stopwatch';
import { ITasks } from '../types/tasks';

function App() {
  const [tasks, setTasks] = useState<ITasks[] | []>([])
  return (
    <div className={styles.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
