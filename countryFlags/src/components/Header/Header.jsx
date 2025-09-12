import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
    const [icon, setIcon] = useState('sunny');

    const toggleDarkMode = (currentIcon) => {
        const newIcon = currentIcon === 'sunny' ? 'moon' : 'sunny';
        setIcon(newIcon);
    };

    useEffect(() => {
        // toggle dark mode on body
        document.body.classList.toggle('dark-mode', icon === 'moon');

        // toggle dark mode on header
        const headerEl = document.querySelector(`.${styles.headerContainer}`);
        if (headerEl) {
            headerEl.classList.toggle(styles.headerDarkMode, icon === 'moon');
        }
    }, [icon]);

    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerContent}>  
                <h2>Country Flag</h2>
                <ion-icon
                    name={icon}
                    onClick={() => toggleDarkMode(icon)}>
                </ion-icon>
            </div>
        </div>
    );
};

export default Header;