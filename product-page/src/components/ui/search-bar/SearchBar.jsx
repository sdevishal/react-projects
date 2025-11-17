import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../../features/searchSlice";

const Searchbar = () => {
  const { query } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center max-w-sm mx-auto border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-[#27272A] text-gray-800 dark:text-gray-100 rounded-full focus-within:border-blue-400 transition-all duration-200">
      <input
        type="text"
        value={query}
        placeholder="Search products..."
        className="bg-transparent focus:outline-none w-full px-2 text-sm md:text-base"
        onChange={(e) => dispatch(setQuery(e.target.value))}
      />
      <button
        type="button"
        className="px-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
      >
        <i className="bi bi-search text-lg"></i>
      </button>
    </div>
  );
};

export default Searchbar;
