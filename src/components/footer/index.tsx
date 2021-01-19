import * as React from 'react';
import styles from './styles.module.scss';
import Navbar from '@components/navbar';
import FooterNav from '@components/footer__nav';
import Copyright from '@components/copyright';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <FooterNav />
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default Footer;
