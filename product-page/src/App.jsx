import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const App = () => {
  const { isDark } = useSelector((state) => state.theme);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-color">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
