import SearchFilter from './SearchFilter/SearchFilter.jsx';
import CountriesList from './CountriesList/CountriesList.jsx';
import { useState } from 'react';

const Home = () => {
  const [query, setQuery] = useState('');
  return (
    <div style={{ paddingInline: '1rem' }} >
      <SearchFilter setQuery={setQuery} />
      <CountriesList query={query} />
    </div>
  );
};

export default Home;
