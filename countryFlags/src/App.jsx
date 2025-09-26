import { Outlet, ScrollRestoration } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext.js";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import { useState } from "react";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1; /* grows to take available space */
  padding: 2rem;
  background-color: var(--bg-primary);
  color: var(--text-color);

  &.dark {
    background-color: var(--bg-secondary);
    color: var(--text-color);
  }
`;

const App = () => {
  
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("isDark");
    return stored ? JSON.parse(stored) : false;
  });

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      <AppWrapper>
        <ScrollRestoration />
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </AppWrapper>
    </ThemeContext.Provider>
  );
};

export default App;
