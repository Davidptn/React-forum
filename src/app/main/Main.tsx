import { ReactNode } from "react"
import styles from './main.module.css'

interface MainProps {
    children: ReactNode
}

export function Main(props: MainProps) {
    return (
        <main className={styles.main}>
            {props.children}
        </main>
    )
}