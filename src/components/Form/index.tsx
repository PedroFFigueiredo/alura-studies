import React from 'react';
import Button from '../Button';
import styles from './Form.module.scss';
import { ITasks } from '../../types/tasks';

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>
}> {
  state = {
    task: '',
    time: '00:00'
  }

  addTask(event: React.FormEvent) {
    event.preventDefault();
    this.props.setTasks(oldTasks => [...oldTasks, { ...this.state }])
  }

  render() {
    return (
      <form className={styles['new-task']} onSubmit={this.addTask.bind(this)}>
        <div className={styles.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type='text'
            name='tarefa'
            value={this.state.task}
            onChange={event => this.setState({ ...this.state, task: event.target.value })}
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
            value={this.state.time}
            onChange={event => this.setState({ ...this.state, time: event.target.value })}
            id='tempo'
            min='00:00:00'
            max='01:30:00'
            required
          />
        </div>
        <Button type='submit'>Adicionar</Button>
      </form >
    )
  }
}

export default Form;