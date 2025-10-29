import SearchFilter from "./SearchFilter/SearchFilter.jsx";
import CountriesList from "./CountriesList/CountriesList.jsx";
import { useState } from "react";

const Home = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <style>
        {`
        .Home{
          max-width:1200px;
          margin-inline:auto;
          background-color: var(--bg-color);
          color: var(--text-color);
          }
       `}
      </style>
      <div className="Home">
        <SearchFilter setQuery={setQuery} />
        <CountriesList query={query} />
      </div>
    </>
  );
};

export default Home;
