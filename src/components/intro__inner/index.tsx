import * as React from 'react';
import styles from './styles.module.scss';
import intro__img from '../../assets/images/intro__img.png';

interface IProps {
  introTitle: string;
  introText: string;
}

const IntroInner = ({ introTitle, introText }: IProps) => {
  return (
    <div className="container">
      <div className={styles.intro__inner}>
        <div className={styles.intro__title}>{introTitle}</div>
        <div className={styles.intro__text}>{introText}</div>
        <div className={styles.intro__img}>
          <img src={intro__img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default IntroInner;
