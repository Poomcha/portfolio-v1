import styles from './switch.module.css';

import { useContext, useState } from 'react';
import { LanguageContext, LanguageContextI } from '../../../context/language';

export default function Switch() {
  const { setLanguage } = useContext(LanguageContext) as LanguageContextI;
  const toggleLang = () => {
    setLanguage((prevLang: string) => (prevLang === 'fr' ? 'en' : 'fr'));
  };

  const [isChecked, setIsChecked] = useState(true);

  const handleCheck = () => {
    setIsChecked((prevChecked) => !prevChecked);
    toggleLang();
  };

  return (
    <fieldset className={styles.switch}>
      <label htmlFor="fr">
        <img
          src="/images/flags/fr.svg"
          alt="French Flag"
          className={styles.switch__flagIcon}
        />
      </label>
      <input
        type="radio"
        name="language"
        id="fr"
        checked={isChecked}
        onChange={handleCheck}
        className={styles.switch__input_fr}
      />
      <label htmlFor="en">
        <img
          src="/images/flags/gb.svg"
          alt="UK Flag"
          className={styles.switch__flagIcon}
        />
      </label>
      <input
        type="radio"
        name="language"
        id="en"
        checked={!isChecked}
        onChange={handleCheck}
        className={styles.switch__input_en}
      />
      <div className={styles.switch__toggleCtn}>
        <div className={styles.switch__slider}></div>
      </div>
    </fieldset>
  );
}
