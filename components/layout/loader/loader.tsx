import styles from './loader.module.css';

import cN from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { LanguageContext, LanguageContextI } from '../../context/language';

export default function Loader() {
  const { language } = useContext(LanguageContext) as LanguageContextI;
  const [loading, setLoading] = useState(true);
  const text = language === 'fr' ? 'chargement' : 'loading';

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={cN(styles.loader, { [styles.loaderhide]: !loading })}>
      <div className={styles.loader__top} data-descr={text}></div>
      <div className={styles.loader__bot} data-descr={text}></div>
    </div>
  );
}
