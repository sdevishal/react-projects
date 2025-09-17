import { useEffect, useState } from 'react';

const Header = () => {
  const [icon, setIcon] = useState('sunny');

  const toggleDarkMode = (currentIcon) => {
    const newIcon = currentIcon === 'sunny' ? 'moon' : 'sunny';
    setIcon(newIcon);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', icon === 'moon');
  }, [icon]);

  return (
    <>
      <style>
        {`
          .header-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem 2rem;
            background-color: #f5f5f5;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            transition: background-color 0.3s ease;
          }

          .header-container.dark {
            background-color: #222;
            color: #fff;
          }

          .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: 1200px;
          }

          .header-content h2 {
            margin: 0;
            font-size: 1.5rem;
          }

          .dark-toggle {
            font-size: 1.5rem;
            cursor: pointer;
            transition: transform 0.3s ease;
          }

          .dark-toggle:hover {
            transform: scale(1.2);
          }
        `}
      </style>

      <header className={`header-container ${icon === 'moon' ? 'dark' : ''}`}>
        <div className="header-content">
          <h2>Country Flag</h2>
          <ion-icon
            name={icon}
            class="dark-toggle"
            onClick={() => toggleDarkMode(icon)}>
          </ion-icon>
        </div>
      </header>
    </>
  );
};

export default Header;
