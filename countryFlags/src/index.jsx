import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Error from "./Error.jsx";
import Home from "./components/Home/Home.jsx";
import AboutUs from "./components/About/AboutUs.jsx";
import ContactUs from "./components/Contact/ContactUs.jsx";
import CountryCardDetails from "./components/Home/CountriesList/CountryCardDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        // path: "country/:code",
        path: "country/:name",
        element: <CountryCardDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
