import * as React from 'react';
import styles from './styles.module.scss';

interface IProps {
  title: string;
  link1: string;
  link2?: string;
  link3?: string;
  link4?: string;
}

const NavItem = ({ title, link1, link2, link3, link4 }: IProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.title}>{title}</div>

      <ul>
        <li>
          <a href="#">{link1}</a>
        </li>
        <li>
          <a href="#">{link2}</a>
        </li>
        <li>
          <a href="#">{link3}</a>
        </li>
        <li>
          <a href="#">{link4}</a>
        </li>
      </ul>
    </div>
  );
};

export default NavItem;
