import styles from './SearchFilter.module.css';
import { countries } from '../CountriesList/countriesData';

const SearchFilter = () => {
    const findCountry = (e) => {
        console.log(e.target.value);
        console.log(countries)
    };
    return (
        <div className={styles.searchFilterContainer}>
            <input type="text" onChange={findCountry} placeholder='Search country...' />
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