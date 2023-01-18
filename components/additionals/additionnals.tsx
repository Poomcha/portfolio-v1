import styles from './additionnals.module.css';

import { Element } from 'react-scroll';
import cN from 'classnames';

export default function Additionnals() {
  return (
    <Element
      className={cN(styles.additionnals, 'page')}
      id="additionnals"
      name="additionnals"
    ></Element>
  );
}
