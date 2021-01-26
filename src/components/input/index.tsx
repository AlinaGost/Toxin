import * as React from 'react';
import styles from './styles.module.scss';

interface IProps {
  labelTitle?: string;
  arrow: React.ReactNode;
  placeholder: string;
}

const Input = ({ labelTitle, placeholder, arrow }: IProps) => {
  return (
    <div className={styles.form}>
      <label className={styles.label} htmlFor={'input'}>
        {labelTitle}
      </label>
      <input
        className={styles.input}
        type="text"
        id={'input'}
        placeholder={placeholder}
      />
      {arrow}
    </div>
  );
};

export default Input;
