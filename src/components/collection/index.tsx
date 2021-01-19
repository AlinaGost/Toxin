import * as React from 'react';
import styles from './styles.module.scss';
import CollectionInner from '@components/collection__inner';

// interface IProps {
//   siteTitle?: string;
// }

const Collection = () => {
  return (
    <div className={styles.collection}>
      <div className="container">
        <CollectionInner />
      </div>
    </div>
  );
};

export default Collection;
