import styles from "./SearchFilter.module.css";
import { useEffect, useState } from "react";

const SearchFilter = ({ setQuery, countryName }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  return (
    <div className={styles.searchFilterContainer}>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search country..."
      />
      <select value={selectedValue} onChange={handleChange}>
        <option value="filter">--Filter by Region--</option>
        {countryName.map((country) => {
          {
            return (
              <option value={country?.name?.common} key={country?.cca3}>
                {country?.name?.common}
              </option>
            );
          }
        })}
      </select>
    </div>
  );
};

export default SearchFilter;
