import Links from "./links/links"
import styles from "./aside.module.css"

export default function Aside() {
    return <aside className={styles.aside}>
        <Links />
    </aside>
}