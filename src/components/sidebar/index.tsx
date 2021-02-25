import * as React from 'react';
import styles from './styles.module.scss';
import Input from '@components/input';
import ReactSlider from 'react-slider';

const Sidebar = () => {
  return (
    <div className="container">
      <div className={styles.sidebar}>
        <Input placeholder={'21*21*20'} labelTitle={'Прибытие'} />
        <Input placeholder={'21*21*20'} labelTitle={'Гости'} />

        <div className={styles.margin}></div>

        <ReactSlider
          defaultValue={[1000, 10000]}
          trackClassName={styles.track}
          thumbClassName={styles.thumb}
          max={10000}
          min={1000}
          step={250}
        />
      </div>
    </div>
  );
};

export default Sidebar;
