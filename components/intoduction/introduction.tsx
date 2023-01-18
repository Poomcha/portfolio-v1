import styles from './introduction.module.css';

import cN from 'classnames';
import { Element } from 'react-scroll';

export default function Introduction() {
  return (
    <Element
      className={cN(styles.introduction, 'page')}
      id="introduction"
      name="introduction"
    ></Element>
  );
}
