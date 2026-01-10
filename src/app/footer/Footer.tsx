import { ICONS, IMAGES } from '../../shared'
import styles from './header.module.css'

export function Footer() {
    return <footer className={styles.footer}>
        <div className={styles.footerContent}>
            <img src={IMAGES.footerLogo} className={styles.footerLogo} />
            <div className={styles.footerText}>
                <p>© 2024 TurboSphere. All rights reserved</p>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
        </div>
    </footer>
