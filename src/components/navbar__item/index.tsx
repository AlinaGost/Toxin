import * as React from 'react';
import styles from './styles.module.scss';
// import classNames from 'classnames';

interface IProps {
  siteTitle: string;
  // className?: string;
}

const NavbarItem = ({ siteTitle = 'Контакты' }: IProps) => {
  return <div className={styles.navbar__item}>{siteTitle}</div>;
};

export default NavbarItem;
