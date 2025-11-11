import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../features/menuSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state) => state.menu);
  const { isDark } = useSelector((state) => state.theme);

  const handleLinkClick = () => dispatch(toggleMenu());
  const activeClass = () =>
    `block px-2 py-1 ${
      isDark
        ? "hover:bg-white hover:text-black"
        : "hover:bg-black hover:text-white"
    } w-full`;

  return (
    <div>
      <nav>
        <div
          className="block md:hidden text-2xl text-right cursor-pointer dark:text-white"
          onClick={() => dispatch(toggleMenu())}
          aria-expanded={isMenuOpen}
        >
          <i className={isMenuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
        </div>
        <div
          role="menu"
          aria-hidden={!isMenuOpen}
          className={`absolute md:static transition-all pt-2 w-full md:w-auto h-screen md:h-auto md:pt-0 text-center text-black dark:text-white bg-white dark:bg-[#111827]
         ${isMenuOpen ? "left-0" : "-left-full"}
        `}
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
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
