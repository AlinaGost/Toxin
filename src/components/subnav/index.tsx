import * as React from 'react';
import styles from './styles.module.scss';
import { useState } from 'react';
import classNames from 'classnames';
import Item from '@components/navbar';
import arrow_down from '@assets/images/arrow_down.svg';

interface IProps {
  Title: string | React.ReactNode;
  itemTitle1: string;
  itemTitle2: string;
  itemTitle3?: string;
  itemTitle4?: string;
}

const List = ({
  Title,
  itemTitle1,
  itemTitle2,
  itemTitle3,
  itemTitle4,
}: IProps) => {
  const [isActive, setActive] = useState(false);

  return (
    <div>
      <div className={styles.nav}>
        <button onClick={() => setActive(!isActive)}>{Title}</button>
      </div>

      <ul
        className={classNames(styles.list, {
          [styles.active]: isActive,
        })}
      >
        <li>
          <a className={styles.item} href="#">
            {itemTitle1}
          </a>
        </li>
        <li>
          <a className={styles.item} href="#">
            {itemTitle2}
          </a>
        </li>
        <li>
          <a className={styles.item} href="#">
            {itemTitle3}
          </a>
        </li>
        <li>
          <a className={styles.item} href="#">
            {itemTitle4}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default List;
