import { useState } from "react"
import styles from "./switch.module.css"

interface SwitchI {
    toggleLang: () => void
}

export default function Switch(props: SwitchI) {
    const [isChecked, setIsChecked] = useState(true)

    const handleCheck = () => {
        setIsChecked(prevChecked => !prevChecked)
        props.toggleLang()
    }

    return (
        <fieldset className={styles.switch}>
            <label htmlFor="fr">
                <img src="/images/flags/fr.svg" alt="French Flag" className={styles.switch__flagIcon}/>
            </label>
            <input type="radio" name="language" id="fr" checked={isChecked} onChange={handleCheck} className={styles.switch__input_fr}/>
            <label htmlFor="en">
                <img src="/images/flags/gb.svg" alt="UK Flag" className={styles.switch__flagIcon}/>
            </label>
            <input type="radio" name="language" id="en" checked={!isChecked} onChange={handleCheck} className={styles.switch__input_en}/>
            <div className={styles.switch__toggleCtn}>
                <div className={styles.switch__slider}></div>
            </div>
        </fieldset>
    )
}