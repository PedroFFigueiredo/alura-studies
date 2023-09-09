import Form from '../components/Form/index';
import List from '../components/List';
import styles from './App.module.scss';
import Stopwatch from '../components/Stopwatch';

function App() {
  return (
    <div className={styles.AppStyle}>
      <Form />
      <List />
      <Stopwatch />
    </div>
  );
}

export default App;
