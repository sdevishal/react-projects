import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../features/menuSlice";
import Theme from "../theme/Theme";

const NavBar = () => {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state) => state.menu);

  const handleLinkClick = () => dispatch(toggleMenu());
  const activeClass = () =>
    `block px-2 py-1 hover:bg-black hover:text-white w-full`;

  return (
    <nav>
      <div
        className="block md:hidden text-2xl text-right cursor-pointer"
        onClick={() => dispatch(toggleMenu())}
        aria-expanded={isMenuOpen}
      >
        <i className={isMenuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
      </div>
      <div
        className={`bg-white min-h-screen text-center absolute md:static z-30 inset-x-0 w-full border-b-2 border-b-[#ddd] py-4 md:py-0 md:border-none transition duration-200 ease-in-out ${
          // isMenuOpen ? "left-0" : "left-[-100%]"
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col md:flex-row gap-2 md:gap-10 md:items-center">
          <li onClick={handleLinkClick}>
            <NavLink to="/" className={activeClass}>
              Home
            </NavLink>
          </li>
          <li onClick={handleLinkClick}>
            <NavLink to="/blog" className={activeClass}>
              Blog
            </NavLink>
          </li>
          <li onClick={handleLinkClick}>
            <NavLink to="/about" className={activeClass}>
              About
            </NavLink>
          </li>
          <li onClick={handleLinkClick}>
            <NavLink to="/contact" className={activeClass}>
              Contact
            </NavLink>
          </li>
          <li onClick={handleLinkClick}>
            <Theme />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
