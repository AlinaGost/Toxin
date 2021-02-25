import * as React from 'react';
import styles from './styles.module.scss';
import Button from '@components/button';
import Logo from '@components/logo';
import Navbar from '@components/navbar';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <Navbar />
          <Button type={'secondary'} buttonTitle={'войти'} />
          <Button type={'primary'} buttonTitle={'зарегистрироваться'} />
        </div>
      </div>
    </div>
  );
};

export default Header;
