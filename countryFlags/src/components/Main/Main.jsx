import SearchFilter from './SearchFilter/SearchFilter.jsx';
// import Card from './Cards/Cards.jsx';
import CountriesList from './CountriesList/CountriesList.jsx';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <SearchFilter />
      {/* <Card /> */}
      <CountriesList />

    </main>
  );
};

export default Main;
