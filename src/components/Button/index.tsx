import React from 'react';
import styles from './Button.module.scss';

class Button extends React.Component {
  render() {
    return (
      <button className={styles.button}>
        Botão
      </button>
    )
  }
}

export default Button;