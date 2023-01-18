import styles from './showcase.module.css';

import { Element } from 'react-scroll';
import cN from 'classnames';

export default function Showcase() {
  return (
    <Element
      className={cN(styles.showcase, 'page')}
      id="showcase"
      name="showcase"
    ></Element>
  );
}
