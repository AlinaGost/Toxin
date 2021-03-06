import * as React from 'react';
import styles from './styles.module.scss';
import Button from '@components/button';
import Input from '@components/input';
import MaterialUIPickers from '@components/datePicker';

interface IProps {
  formTitle: string;
}

const Form = ({ formTitle }: IProps) => {
  return (
    <div className={styles.form}>
      <div className={styles.title}>{formTitle}</div>

      <div className={styles.inputs}>
        <div className={styles.input}>
          <MaterialUIPickers label={'Прибытие'} />
        </div>

        <div className={styles.input}>
          <MaterialUIPickers label={'Выезд'} />
        </div>
      </div>

      <Input
        labelTitle={'Гости'}
        arrow={
          <span>
            <i className="fas fa-angle-down" />
          </span>
        }
        placeholder={'Сколько гостей'}
      />

      <div className={styles.button}>
        <a href={'page2'}>
          <Button
            buttonTitle={
              <span>
                подобрать номер <i className="fas fa-arrow-right" />
              </span>
            }
            type={'withArrow'}
          />
        </a>
      </div>
    </div>
  );
};

export default Form;
