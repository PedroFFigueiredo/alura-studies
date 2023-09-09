import React from 'react';
import styles from './Button.module.scss';

class Button extends React.Component<{ children: string }> {
  render() {
    return (
      <button className={styles.button}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;