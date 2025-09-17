import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // give React a tick to render the new page
    setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
