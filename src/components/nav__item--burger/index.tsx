import * as React from 'react';
import styles from './styles.module.scss';
// import classNames from 'classnames';

interface IProps {
  siteTitle: string;
}

const ItemBurger = ({ siteTitle = 'Контакты' }: IProps) => {
  return <div className={styles.item__burger}>{siteTitle}</div>;
};

export default ItemBurger;
