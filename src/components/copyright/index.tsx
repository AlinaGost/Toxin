import * as React from 'react';
import styles from './styles.module.scss';

interface IProps {
  text: string;
}

const Copyright = ({ text }: IProps) => {
  return (
    <div className={styles.copyright}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text}>{text}</div>
          <div className={styles.social}>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
