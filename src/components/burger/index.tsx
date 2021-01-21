import * as React from 'react';
import styles from './styles.module.scss';
import { useState } from 'react';
import classNames from 'classnames';
import ItemBurger from '@components/nav__item--burger';

const Burger = () => {
  const [isActive, setActive] = useState(false);

  return (
    <div>
      <button className={styles.button} onClick={() => setActive(!isActive)}>
        <span className={styles.burger}>Menu</span>
      </button>

      <div
        className={classNames(styles.navbar__burger, {
          [styles.active]: isActive,
        })}
      >
        <ItemBurger siteTitle={'Каталог'} />
        <ItemBurger siteTitle={'Контакты'} />
        <ItemBurger siteTitle={'Коллекции'} />
        <ItemBurger siteTitle={'Доставка'} />
      </div>
    </div>
  );
};

export default Burger;
