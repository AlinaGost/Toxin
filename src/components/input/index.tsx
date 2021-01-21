import * as React from 'react';
import styles from './styles.module.scss';

interface IProps {
  placeholder: string;
}

const Input = ({ placeholder }: IProps) => {
  return <input className={styles.input} placeholder={placeholder} />;
};

export default Input;
