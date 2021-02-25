import * as React from 'react';
import styles from './styles.module.scss';
import NavItem from '@components/navItem';
import Subnav from '@components/subnav';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavItem title={'О нас'} />
      <Subnav
        title={'Услуги'}
        subnavTitles={['Бассейн', 'Ресторан', 'Банкет']}
      />
      <NavItem title={'Вакансии'} />
      <NavItem title={'Новости'} />
      <Subnav
        title={'Соглашения'}
        subnavTitles={[
          'Служба поддержки',
          'Сообщества',
          'Связь с нами',
          'Наша команда',
        ]}
      />
    </div>
  );
};

export default Navbar;
