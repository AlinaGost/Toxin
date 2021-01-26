import * as React from 'react';
import styles from './styles.module.scss';
import logo from '../../assets/images/logo.svg';
import toxin from '../../assets/images/toxin.svg';

const Logo = () => {
  return (
    <a href="#" className={styles.logo}>
      <img className={styles.img} src={logo} alt="" />
      <img className={styles.img} src={toxin} alt="" />
    </a>
  );
};

export default Logo;
