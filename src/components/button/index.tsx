import * as React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface IProps {
  buttonTitle: string;
  className?: string;
}

const Button = ({ buttonTitle, className = styles.button }: IProps) => {
  return <button className={classNames(className)}>{buttonTitle}</button>;
};

export default Button;
