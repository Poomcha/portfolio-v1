import styles from './scrollbar.module.css';

export default function Scrollbar() {
  return (
    <div className={styles.scrollbar}>
      <div className={styles.scrollbar__thumb}></div>
    </div>
  );
}
