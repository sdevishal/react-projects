import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";

const App = () => {
  const { isMenuOpen } = useSelector((state) => state.menu);
  return (
    <div
      className={!isMenuOpen ? "overflow-hidden" : ""}
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
