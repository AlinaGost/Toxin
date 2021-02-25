import * as React from 'react';
import styles from './styles.module.scss';
import { useState } from 'react';
import classNames from 'classnames';
import arrow_down from '@assets/images/arrow_down.svg';

interface IProps {
  title: string | React.ReactNode;
  subnavTitles: string[];
}

const Subnav = ({ title, subnavTitles }: IProps) => {
  const [isActive, setActive] = useState(false);

  const subnavItems = subnavTitles.map(el => (
    <li>
      <a>{el}</a>
    </li>
  ));

  return (
    <div>
      <div className={styles.nav}>
        <button onClick={() => setActive(!isActive)}>
          <div>
            {title}
            <i className={'fas fa-chevron-down'} />
          </div>
        </button>
      </div>
      <ul
        onClick={() => setActive(!isActive)}
        className={classNames(styles.list, {
          [styles.active]: isActive,
        })}
      >
        {subnavItems}
      </ul>
    </div>
  );
};

export default Subnav;
