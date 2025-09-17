import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

const App = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <main style={{ paddingInline: "2rem", minHeight: "100vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
