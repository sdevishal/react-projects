import "./Theme.css";
import { useSelector } from "react-redux";

const Theme = () => {
  const { isMenuOpen } = useSelector((state) => state.menu);
  return (
    <div role="button" aria-label="Toggle theme" className={`theme-icon ${isMenuOpen ? "active" : ""}`}>
      <i className="bi bi-moon-fill"></i>
      {/* <i class="bi bi-sun-fill"></i> */}
    </div>
  );
};

export default Theme;
