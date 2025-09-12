import { useState } from 'react';
import '../style.css';

const Header = () => {
    const [icon, setIcon] = useState('sunny');

    const toggleDarkMode = (icon) => {
        if (icon === 'sunny') {
            setIcon('moon');
            document.body.classList.add('dark-mode');
        } else {
            setIcon('sunny');
            document.body.classList.remove('dark-mode');
        }
    };

    return (
        <div className="header">
            <h2>Country Flag</h2>
            <ion-icon name={icon} onClick={() => toggleDarkMode(icon)}></ion-icon>
        </div>
    );
};

export default Header;