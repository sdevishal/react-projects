    import { useEffect } from "react";
    import { useLocation } from "react-router-dom";

    export default function ScrollToTop() {
      const { pathname } = useLocation();

      useEffect(() => {
        // This scrolls the entire document to the top
        document.documentElement.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant", // or "smooth" for an animated scroll
        });
      }, [pathname]); // Re-run the effect whenever the pathname changes

      return null; // This component doesn't render any UI
    }