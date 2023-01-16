import styles from './showcase.module.css';

import { Element } from 'react-scroll';

export default function Showcase() {
  return (
    <Element
      className={styles.showcase}
      id="showcase"
      name="showcase"
    ></Element>
  );
}
