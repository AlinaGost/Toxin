import * as React from 'react';
import styles from './styles.module.scss';
import FormInner from '@components/form__inner';

const Form = () => {
  return (
    <div className={styles.form}>
      <div className="container">
        <FormInner
          formTitle={'Запись на дегустацию'}
          formText={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. '
          }
        />
      </div>
    </div>
  );
};

export default Form;
