import styles from './introduction.module.css';

import { Element } from 'react-scroll';

export default function Introduction() {
  return (
    <Element
      className={styles.introduction}
      id="introduction"
      name="introduction"
    ></Element>
  );
}
