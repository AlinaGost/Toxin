import * as React from 'react';
import styles from './styles.module.scss';

interface IProps {
  itemTitle: string;
}

const Item = ({ itemTitle }: IProps) => {
  return (
    <a className={styles.item} href="#">
      {itemTitle}
    </a>
  );
};

export default Item;
