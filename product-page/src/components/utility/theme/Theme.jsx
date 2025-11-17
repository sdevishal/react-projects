import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../features/themeSlice";

const Theme = () => {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state) => state.theme);
  const { isMenuOpen } = useSelector((state) => state.menu);
  return (
    <div
      role="button"
      aria-label="Toggle theme "
      className={`theme-icon ${isMenuOpen ? "active" : ""}`}
      onClick={() => dispatch(toggleTheme())}
    >
      <i
        className={`bi p-[8px_8px_8px_10px] rounded-full cursor-pointer hover:bg-black hover:text-white ${
          isDark ? "bi-sun-fill text-white" : "bi-moon-fill"
        }`}
      ></i>
    </div>
  );
};

export default Theme;
