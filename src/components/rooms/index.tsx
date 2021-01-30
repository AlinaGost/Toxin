import * as React from 'react';
import styles from './styles.module.scss';
import Item from '@components/roomsItem';

const Rooms = () => {
  return (
    <div className="container">
      <div className={styles.rooms}>
        <h3 className={styles.title}>Номера, которые мы для вас подобрали</h3>
        <Item
          price={
            <span>
              9000 <i className="fas fa-ruble-sign"></i>
            </span>
          }
          roomNumber={865}
        />
      </div>
      ;
    </div>
  );
};

export default Rooms;
