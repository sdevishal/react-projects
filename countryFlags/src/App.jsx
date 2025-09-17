import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <>
            <Header />
            <main style={{ paddingInline: '2rem', minHeight: '100vh' }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default App;