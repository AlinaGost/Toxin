import * as React from 'react';
import styles from './styles.module.scss';
import Button from '@components/button';
import Navbar from '@components/navbar';
import NavbarItem from '@components/navbar__item';

interface IProps {
  siteTitle?: string;
}

const Header = ({ siteTitle }: IProps) => {
  return (
    <header>
      <div className={styles.header}>
        <div className={'container'}>
          <div className={styles.header__info}>
            <a href={'https://goo.gl/maps/4N4K7mY7uJJFMDws7'} target={'_blank'}>
              Новокузнечный переулок 4/1
            </a>
            <a href={'tel:88121234567'}>8 (812) 123-45-67</a>
          </div>
          <Navbar />
          <div className={styles.header__btn}>
            <div className={styles.header__btn__right}>
              <Button buttonTitle={'Винная карта'} />
            </div>
            <Button buttonTitle={'Дегустация'} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
