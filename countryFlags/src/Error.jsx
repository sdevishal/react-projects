// Error.jsx
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
   
    return (
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <h1>Oops! Something went wrong 😢</h1>
            <p>{error.statusText || error.message}</p>
            <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
                Go back Home
            </Link>
        </div>
    );
};

export default Error;
