import * as React from 'react';
import styles from './styles.module.scss';
import form_img_1 from '../../assets/images/form_img_1.png';
import form_img_2 from '../../assets/images/form_img_2.png';
import Input from '@components/input';
import Button from '@components/button';

interface IProps {
  formTitle: string;
  formText: string;
}

const FormInner = ({ formTitle, formText }: IProps) => {
  return (
    <div className={styles.form__inner}>
      <img className={styles.img__left} src={form_img_1} alt="" />
      <img className={styles.img__right} src={form_img_2} alt="" />

      <div className={styles.title}>{formTitle}</div>
      <div className={styles.text}>{formText}</div>

      <div>
        <div className={styles.form__input}>
          <div className={styles.input__name}>
            <Input placeholder={'Имя'} />
          </div>
          <div>
            <Input placeholder={'Телефон'} />
          </div>
        </div>
        <Input placeholder={'Бутик на Невском 103'} />
      </div>

      <Button buttonTitle={'Записаться'} className={styles.button__black} />
    </div>
  );
};

export default FormInner;
