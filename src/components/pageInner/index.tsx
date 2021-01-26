import * as React from 'react';
import styles from './styles.module.scss';
import Form from '@components/form';

const Inner = () => {
  return (
    <div className={styles.inner}>
      <div className="container">
        <Form formTitle={'Найдём номера под ваши пожелания'} />
        <div className={styles.text}>
          <p>Лучшие номера для вашей работы, отдыха и просто вдохновения</p>
        </div>
      </div>
    </div>
  );
};

export default Inner;
