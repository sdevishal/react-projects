import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div
      className="app-container"
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
