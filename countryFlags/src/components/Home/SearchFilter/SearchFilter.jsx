import styles from "./SearchFilter.module.css";

const SearchFilter = ({ setQuery }) => {
  return (
    <div className={styles.searchFilterContainer}>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search country..."
        className=""
      />
      <select onChange={(e) => setQuery(e.target.value)}>
        <option hidden>--Filter by Region--</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SearchFilter;
