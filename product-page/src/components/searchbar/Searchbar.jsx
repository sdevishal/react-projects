const Searchbar = () => {
  return (
    <div className=" border-gray-300 dark:border-gray-600 bg-white dark:bg-[#27272A] text-gray-800 dark:text-gray-100 rounded-full focus:ring-2 focus:ring-blue-400 px-0 py-0.5 border-2  focus-within:border-blue-400 ">
      <input
        type="text"
        placeholder="Search here.."
        className="py-0 pl-4 border-none focus:outline-none"
      />
      <i className="bi bi-search cursor-pointer w-1 py-1 px-1.5 rounded-full hover:bg-gray-200"></i>
    </div>
  );
};

export default Searchbar;
