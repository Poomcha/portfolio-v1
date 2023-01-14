import styles from './header.module.css';

import Switch from './language/switch';
import Nav from './nav/nav';

export default function Header() {
  return (
    <header className={styles.header}>
      <Nav />
      <Switch />
    </header>
  );
}
