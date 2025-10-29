import { useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";

const Header = () => {
  const [isDark, setIsDark] = useTheme();

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <>
      <style>
        {`
          header {
            padding: 1rem 2rem;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            transition: background-color 0.3s ease;
            border-bottom: 1px solid var(--header-footer-border);
          }

          .header-content {
            max-width: 1200px;
            margin-inline: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .header-content h2 {
            margin: 0;
            font-size: 1.5rem;
          }

          .theme-icon{
            font-size: 1.5rem;
            cursor: pointer;
          }

        `}
      </style>

      <header>
        <div className="header-content">
          <h2>Country Flag</h2>
          <ion-icon
            className="theme-icon"
            name={isDark ? "sunny" : "moon"}
            onClick={toggleDarkMode}
          ></ion-icon>
        </div>
      </header>
    </>
  );
};

export default Header;
