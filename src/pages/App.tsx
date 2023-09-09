import React from 'react';
import Form from '../components/Form/index';
import List from '../components/List';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.AppStyle}>
      <Form />
      <List />
    </div>
  );
}

export default App;
