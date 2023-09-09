import React from 'react';
import Button from '../Button';
import styles from './Form.module.scss';

class Form extends React.Component {
  render() {
    return (
      <form className={styles['new-task']}>
        <div className={styles.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type='text'
            name='tarefa'
            id='tarefa'
            placeholder='O que você deseja estudar'
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='tempo'>
            Tempo
          </label>
          <input
            type='time'
            step='1'
            name='tempo'
            id='tempo'
            min='00:00:00'
            max='01:30:00'
            required
          />
        </div>
        <Button>Adicionar</Button>
      </form >
    )
  }
}

export default Form;