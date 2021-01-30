import * as React from 'react';
import styles from './styles.module.scss';
import Input from '@components/input';

const Sidebar = () => {
  return (
    <div className="container">
      <div className={styles.sidebar}>
        <Input placeholder={'21*21*20'} labelTitle={'Прибытие'} />
        <Input placeholder={'21*21*20'} labelTitle={'Прибытие'} />
      </div>
      ;
    </div>
  );
};

export default Sidebar;
