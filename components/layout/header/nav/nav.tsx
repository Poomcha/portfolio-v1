import styles from './nav.module.css';

import { Link } from 'react-scroll';
import cN from 'classnames';
import { useContext } from 'react';
import { LanguageContext, LanguageContextI } from '../../../context/language';

export default function Nav() {
  const { language } = useContext(LanguageContext) as LanguageContextI;

  language;
  const links = [
    {
      name: 'introduction',
      description: {
        fr: 'à propos de moi',
        en: 'about me',
      },
      icon: 'fa-solid fa-user-ninja',
      dataDesc: {
        fr: 'Qui suis-je ?!',
        en: 'Who am I!?',
      },
    },
    {
      name: 'showcase',
      description: {
        fr: 'mes projets',
        en: 'my work',
      },
      icon: 'fa-solid fa-laptop-code',
      dataDesc: {
        fr: 'Découvre mes réalisations !',
        en: 'Discover my achievements!',
      },
    },
    {
      name: 'additionnals',
      description: {
        fr: '',
        en: '',
      },
      icon: 'fa-solid fa-plus',
      dataDesc: {
        fr: 'Encore plus de moi 👻',
        en: 'More about me 👻',
      },
    },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__links_ctn}>
        {links.map((link) => (
          <li
            className={styles.nav__links_ctn__li}
            key={link.name}
            data-descr={link.dataDesc[language as 'fr' | 'en']}
          >
            <Link
              to={link.name}
              smooth={true}
              offset={-2.5 * 16}
              spy={true}
              className={styles.nav__links_ctn__li__link}
              activeClass={styles.nav__links_ctn__li__link_current}
            >
              <i
                className={cN(link.icon, styles.nav__links_ctn__li__link__icon)}
              ></i>
              <span className={styles.nav__links_ctn__li__link__desc}>
                {link.description[language as 'fr' | 'en']}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
