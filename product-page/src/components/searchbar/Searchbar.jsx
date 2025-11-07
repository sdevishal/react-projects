
const Searchbar = () => {

  return (
    <div className="search-bar border-2 border-gray-400 rounded-[2vw] px-4 absolute md:static right-25 ">
      <input type="text" className="outline-none" />
      <i className="bi bi-search cursor-pointer"></i>
    </div>
  );
};

export default Searchbar;
