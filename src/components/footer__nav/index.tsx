import * as React from 'react';
import styles from './styles.module.scss';

const FooterNav = () => {
  return (
    <div className={styles.nav}>
      <a href="#">Главная</a>
      <a href="#">Каталог</a>
      <a href="#">Коллекции</a>
      <a href="#">Дегустация</a>
      <a href="#">Коллекция 2021 </a>
      <a href="#">Контакты</a>
    </div>
  );
};

export default FooterNav;
