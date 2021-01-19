import * as React from 'react';
import styles from './styles.module.scss';
import youtube from '../../assets/images/youtube.svg';
import vk from '../../assets/images/vk.svg';
import facebook from '../../assets/images/facebook.svg';

const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <div>Bинный бутик LE CORTE</div>
      <div className={styles.phone}>8 (812) 123-45-67</div>
      <div className={styles.social}>
        <a href="#">
          <img src={youtube} alt="" />
        </a>
        <a href="#">
          <img src={vk} alt="" />
        </a>
        <a href="#">
          <img src={facebook} alt="" />
        </a>
      </div>
      <div>© le-corte.ru</div>
    </div>
  );
};

export default Copyright;
