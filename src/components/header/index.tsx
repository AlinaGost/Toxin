import * as React from 'react';
import styles from './styles.module.scss';
import Button from '@components/button';
import Logo from '@components/logo';
import Item from '@components/navbar';
import List from '@components/subnav';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <Item itemTitle={'О нас'} />
          <List
            Title={
              <span>
                Соглашения <i className="fas fa-angle-down"></i>
              </span>
            }
            itemTitle1={'Связь с нами'}
            itemTitle2={'Сообщества'}
            itemTitle3={'Служба поддержки'}
          />
          <Item itemTitle={'Вакансии'} />
          <Item itemTitle={'Новости'} />
          <List
            Title={
              <span>
                Услуги <i className="fas fa-angle-down"></i>
              </span>
            }
            itemTitle1={'Прайс'}
            itemTitle2={'Номера'}
            itemTitle3={'Столовая'}
            itemTitle4={'Спортивный зал'}
          />

          <Button type={'secondary'} buttonTitle={'войти'} />
          <Button type={'primary'} buttonTitle={'зарегистрироваться'} />
        </div>
      </div>
    </div>
  );
};

export default Header;
