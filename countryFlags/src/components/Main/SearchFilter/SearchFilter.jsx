import styles from './SearchFilter.module.css';

const SearchFilter = () => {
    return (
            <div className={styles.searchFilterContainer}>
                <input type="text" placeholder='Search country...'/>
                <select name="" id="">
                    <option value="filter">Filter by Region</option>
                    <option value="Country_1">Country_1</option>
                    <option value="Country_2">Country_2</option>
                    <option value="Country_3">Country_3</option>
                </select>
        </div>
    );
};

export default SearchFilter;