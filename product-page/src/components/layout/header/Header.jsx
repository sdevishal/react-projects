import NavBar from "../navbar/NavBar";
import Searchbar from "../../ui/search-bar/SearchBar";
import Theme from "../../utility/theme/Theme";

const Header = () => {
  return (
    <header
      className={`bg-white w-full dark:bg-[#111827] sticky top-0 border-b-2 border-gray-200 py-2`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto px-6 relative">
        <div className={`text-xl dark:text-white`}>
          <i className="bi bi-rocket-takeoff-fill"></i>
        </div>
        <div className="order-3 md:order-2">
          <NavBar />
        </div>
        <div className="flex items-center gap-1 ml-4 order-2 md:order-3">
          <Searchbar />
          <Theme />
        </div>
      </div>
    </header>
  );
};

export default Header;
