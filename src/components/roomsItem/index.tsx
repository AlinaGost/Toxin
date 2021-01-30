import * as React from 'react';
import styles from './styles.module.scss';
import room1 from '../../assets/images/room1.jpg';

interface IProps {
  roomNumber: number;
  price: number & React.ReactNode;
}

const Item = ({ roomNumber, price }: IProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.infoRoom}>
        <div className={styles.roomNumber}> № {roomNumber}</div>
        <div className={styles.price}>{price} в сутки</div>
      </div>
    </div>
  );
};

export default Item;
