import * as React from 'react';
import styles from './styles.module.scss';

interface IProps {
  tableDate: string;
  tableTitle: string;
  tableText: string;
}

const Table = ({ tableDate, tableTitle, tableText }: IProps) => {
  return (
    <table>
      <tr>
        <th className={styles.cell}>{tableDate}</th>
        <th className={styles.cell}>
          <div className={styles.inner}>
            <div className={styles.title}>{tableTitle}</div>
            <div className={styles.text}>{tableText}</div>
          </div>
        </th>
      </tr>

      <tr>
        <th className={styles.cell}>{tableDate}</th>
        <th className={styles.cell}>
          <div className={styles.inner}>
            <div className={styles.title}>{tableTitle}</div>
            <div className={styles.text}>{tableText}</div>
          </div>
        </th>
      </tr>

      <tr>
        <th className={styles.cell}>{tableDate}</th>
        <th className={styles.cell}>
          <div className={styles.inner}>
            <div className={styles.title}>{tableTitle}</div>
            <div className={styles.text}>{tableText}</div>
          </div>
        </th>
      </tr>
    </table>
  );
};

export default Table;
