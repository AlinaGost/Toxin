import * as React from 'react';
import styles from './styles.module.scss';
import NavbarItem from '@components/navbar__item';
import classNames from 'classnames';

interface IProps {
  siteTitle?: string;
  className?: string;
}

const Navbar = ({ siteTitle, className = styles.navbar }: IProps) => {
  return (
    <div className={'container'}>
      <div className={classNames(className)}>
        <NavbarItem siteTitle={'Каталог'} />
        <NavbarItem siteTitle={'Контакты'} />
        <NavbarItem siteTitle={'Коллекции'} />
        <NavbarItem siteTitle={'Доставка'} />
      </div>
    </div>
  );
};

export default Navbar;
