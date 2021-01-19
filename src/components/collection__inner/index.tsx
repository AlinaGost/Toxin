import * as React from 'react';
import styles from './styles.module.scss';
import collection_1 from '../../assets/images/collection_1.png';
import collection_2 from '../../assets/images/collection_2.png';
import collection_3 from '../../assets/images/collection_3.png';
import Button from '@components/button';
import Table from '@components/table';

const CollectionInner = () => {
  return (
    <div className={styles.collection__inner}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.content__left}>
            <div className={styles.content__header}>Новинки коллекций</div>
            <div className={styles.content__title}>
              Март 1980 <br /> Урожай Марселя
            </div>
            <div className={styles.content__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi
              sit non sit sed fermentum. Felis adipiscing morbi sodales ac.
            </div>
            <Table
              tableDate={'1980'}
              tableTitle={"Colli Euganei Bianco Ca' Lustra 1980"}
              tableText={'Красочная бутылка вина из Марселя'}
            />
            <div className={styles.content__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi
              sit non sit sed fermentum. Felis adipiscing morbi sodales ac.
            </div>

            <Button buttonTitle={'Узнать подробнее'} />
          </div>

          <div className={styles.content__right}>
            <div>
              <img className={styles.img__bg} src={collection_1} alt="" />
            </div>
            <div>
              <img className={styles.img__sm} src={collection_2} alt="" />
              <img className={styles.img__sm} src={collection_3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionInner;
