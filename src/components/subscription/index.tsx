import * as React from 'react';
import styles from './styles.module.scss';
import Input from '@components/input';

const Subscription = () => {
  return (
    <div className={styles.subscription}>
      <div className={styles.title}>Подписка</div>
      <div className={styles.text}>
        Получайте специальные предложения и новости сервиса
      </div>
      <Input
        arrow={
          <span>
            <i className="fas fa-arrow-right"></i>
          </span>
        }
        placeholder={'Email'}
      />
    </div>
  );
};

export default Subscription;
