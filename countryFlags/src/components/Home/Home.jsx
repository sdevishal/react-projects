import SearchFilter from "./SearchFilter/SearchFilter.jsx";
import CountriesList from "./CountriesList/CountriesList.jsx";
import { useState } from "react";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [countryName, setCountryName] = useState([]);
  return (
    <div style={{ paddingInline: "1rem" }}>
      <SearchFilter setQuery={setQuery} countryName={countryName} />
      <CountriesList query={query} setCountryName={setCountryName} />
    </div>
  );
};

export default Home;
