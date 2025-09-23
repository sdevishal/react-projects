import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

const App = () => {
  return (
    <>
      <style>
        {`
          .main{
          background-color: var(--bg-primary);
          color: var(--text-color);
          padding: 2rem;
          min-height: 100vh;
          }
          .main.dark{
          background-color: var(--bg-secondary);
          color: var(--text-color);
          }
          
        `}
      </style>
      <div className="app">
        <ScrollRestoration />
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
