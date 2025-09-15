import SearchFilter from './SearchFilter/SearchFilter.jsx';
import CountriesList from './CountriesList/CountriesList.jsx';

const Main = () => {
  return (
    <main style={{ paddingInline: '1rem' }} >
      <SearchFilter />
      <CountriesList />

    </main>
  );
};

export default Main;
