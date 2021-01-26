import * as React from 'react';
import styles from './styles.module.scss';
import Item from '@components/navbar';
import arrow_down from '@assets/images/arrow_down.svg';

interface IProps {
  itemTitle_1: string;
  itemTitle_2: string;
  itemTitle_3?: string;
  itemTitle_4?: string;
}

const List = ({
  itemTitle_1,
  itemTitle_2,
  itemTitle_3,
  itemTitle_4,
}: IProps) => {
  return (
    <ul className={styles.list}>
      <li>
        <a className={styles.item} href="#">
          {itemTitle_1}
        </a>
      </li>
      <li>
        <a className={styles.item} href="#">
          {itemTitle_2}
        </a>
      </li>
      <li>
        <a className={styles.item} href="#">
          {itemTitle_3}
        </a>
      </li>
      <li>
        <a className={styles.item} href="#">
          {itemTitle_4}
        </a>
      </li>
    </ul>
  );
};

export default List;
