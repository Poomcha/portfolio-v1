import styles from "./header.module.css"

import { useContext } from "react"
import { LanguageContext, LanguageContextI } from "../../context/language"

import Switch from "./language/switch"

export default function Header() {
    const { setLanguage } = useContext(LanguageContext) as LanguageContextI
    return <header className={styles.header}>
        <Switch toggleLang={setLanguage}/>
    </header>
}