import * as React from 'react';
import styles from './styles.module.scss';
import NavItem from '@components/footerNav';
import Logo from '@components/logo';
import Subscription from '@components/subscription';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.intro}>
            <Logo />
            <div className={styles.text}>
              <p>
                Бронирование номеров в лучшем отеле 2019 года по версии
                ассоциации «Отельные взгляды»
              </p>
            </div>
          </div>

          <div className={styles.nav}>
            <NavItem
              title={'Навигация'}
              link1={'О нас'}
              link2={'Новости'}
              link3={'Служба поддержки'}
              link4={'Услуги'}
            />
            <NavItem
              title={'О нас'}
              link1={'О сервисе'}
              link2={'Наша команда'}
              link3={'Вакансии'}
              link4={'Инвесторы'}
            />
            <NavItem
              title={'Служба поддержки'}
              link1={'Соглашения'}
              link2={'Сообщества'}
              link3={'Связь с нами'}
            />
          </div>
          <div className={styles.subscription}>
            <Subscription />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
