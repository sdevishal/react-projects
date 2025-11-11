import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const { isDark } = useSelector((state) => state.theme);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main style={{ flex: "1" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
