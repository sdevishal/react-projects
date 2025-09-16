import SearchFilter from './SearchFilter/SearchFilter.jsx';
import CountriesList from './CountriesList/CountriesList.jsx';
import { useState } from 'react';

const Main = () => {
  const [query, setQuery] = useState('');
  return (
    <main style={{ paddingInline: '1rem' }} >
      <SearchFilter setQuery={setQuery} />
      <CountriesList query={query} />
    </main>
  );
};

export default Main;
