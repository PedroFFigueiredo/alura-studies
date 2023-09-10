import React from 'react';
import styles from './Button.module.scss';

class Button extends React.Component<{
  children: string,
  type?: 'button' | 'submit' | 'reset' | undefined,
  onClick?: () => void
}> {
  render() {
    const { type = 'button', onClick } = this.props;
    return (
      <button onClick={onClick} type={type} className={styles.button}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;