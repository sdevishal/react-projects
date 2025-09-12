import SearchFilter from './SearchFilter/SearchFilter.jsx';
import Card from './Cards/Cards.jsx';
import styles from './Main.module.css'

const Main = () => {
    return (
       <main className={styles.main}>
         <SearchFilter />
         <Card />
       </main>
    );
};

export default Main;
