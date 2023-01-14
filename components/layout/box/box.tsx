import styles from "./box.module.css"

interface BoxI {
    children: React.ReactNode
}

export default function Box({children}: BoxI) {
    return <div className={styles.box}>
        {children}
    </div>
}