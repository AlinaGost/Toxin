import * as React from 'react';
import styles from './styles.module.scss';

interface IProps {
  title: string;
}

const NavItem = ({ title }: IProps) => {
  return (
    <a className={styles.item} href="#">
      {title}
    </a>
  );
};

export default NavItem;
