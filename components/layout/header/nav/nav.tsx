import styles from './nav.module.css';

import { Link } from 'react-scroll';
import cN from 'classnames';
import { useContext } from 'react';
import { LanguageContext, LanguageContextI } from '../../../context/language';
import { PageContext, PageContextI, PagesI } from '../../../context/page';
import {
  MailModalContext,
  MailModalContextI,
} from '../../../context/mailmodal';

export default function Nav() {
  const { language } = useContext(LanguageContext) as LanguageContextI;
  const { setCurrentPage } = useContext(PageContext) as PageContextI<PagesI>;
  const { isOpen } = useContext(MailModalContext) as MailModalContextI;
  const handleChangingPage = (targetPage: string) => {
    setCurrentPage((prevState) => ({
      ...prevState,
      current: prevState.names.indexOf(targetPage),
    }));
  };

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
        fr: undefined,
        en: undefined,
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
              to={(() => {
                if (isOpen) {
                  return '';
                } else {
                  return link.name;
                }
              })()}
              smooth={true}
              spy={true}
              className={styles.nav__links_ctn__li__link}
              activeClass={styles.nav__links_ctn__li__link_current}
              onSetActive={handleChangingPage}
              ignoreCancelEvents={true}
            >
              <i
                className={cN(link.icon, styles.nav__links_ctn__li__link__icon)}
              ></i>
              {link.description[language as 'fr' | 'en'] && (
                <span className={styles.nav__links_ctn__li__link__desc}>
                  {link.description[language as 'fr' | 'en']}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
