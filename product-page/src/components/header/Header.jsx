import { useSelector, useDispatch } from "react-redux";
import NavBar from "../navbar/NavBar";
import Searchbar from "../searchbar/Searchbar";
import { toggleMenu } from "../../features/menuSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state) => state.menu);

  return (
    <header className="bg-white sticky top-0 border-b-2 border-gray-200 h-12 z-50 relative">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-6 h-full relative">
        <div className="text-2xl text-black">
          <i className="bi bi-rocket-takeoff-fill"></i>
        </div>
        <div className="flex items-start gap-8">
          <NavBar />
          <Searchbar />
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => dispatch(toggleMenu())}
          className="absolute left-0 w-full h-[100vh] bg-black/70 z-20 md:hidden"
        ></div>
      )}
    </header>
  );
};

export default Header;
