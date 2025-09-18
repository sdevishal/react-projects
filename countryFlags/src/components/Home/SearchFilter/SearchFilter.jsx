import styles from "./SearchFilter.module.css";

const SearchFilter = ({ setQuery }) => {
  return (
    <div className={styles.searchFilterContainer}>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search country..."
      />
      <select>
        <option value="filter">--Filter by Region--</option>
        <option value="filter">Country_1</option>
        <option value="filter">Country_2</option>
        <option value="filter">Country_3</option>
      </select>
    </div>
  );
};

export default SearchFilter;
