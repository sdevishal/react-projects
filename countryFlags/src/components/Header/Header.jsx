import { useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
    localStorage.setItem("isDark", !isDark);
  };

  return (
    <>
      <style>
        {`
          header {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem 2rem;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            transition: background-color 0.3s ease;
            border-bottom: 1px solid var(--header-footer-border);
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

          ion-icon{
            font-size: 1.5rem;
            color: #141414;
            cursor: pointer;
          }

          body.dark ion-icon{
          background-color: var(--header-footer-bg);
          color: var(--text-color);
          }
        `}
      </style>

      <header>
        <div className="header-content">
          <h2>Country Flag</h2>
          <ion-icon
            name={isDark ? "sunny" : "moon"}
            onClick={toggleDarkMode}
          ></ion-icon>
        </div>
      </header>
    </>
  );
};

export default Header;
