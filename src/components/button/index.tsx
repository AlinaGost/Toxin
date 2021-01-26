import * as React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface IProps {
  buttonTitle: string | React.ReactNode;
  type?: 'primary' | 'secondary' | 'withArrow';
}

const Button = ({ buttonTitle, type = 'primary' }: IProps) => {
  return (
    <button className={classNames(styles.button, styles[type])}>
      {buttonTitle}
    </button>
  );
};

export default Button;
