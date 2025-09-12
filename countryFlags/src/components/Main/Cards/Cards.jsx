import Styles from './Cards.module.css';
import { countries } from './countriesData';

const Cards = () => {
    console.log(countries[1]);
    console.log(countries[1].name.common);
    return (
        <div className={Styles.cardContainer}>
            {
                countries.map(country => {
                   
                    return <div className={Styles.card} key={country.cca3}>
                        <img src={country.flags.png} alt={`${country.name.common} flag`} />
                        <div className={Styles.dataGroup}>
                            <h2>{country.name.common}</h2>
                            <p><strong>Official:</strong> {country.name.official}</p>
                            <p><strong>Capital:</strong> {country.capital[0]}</p>
                            <p><strong>Region:</strong> {country.region} ({country.subregion})</p>
                            <p><strong>Population:</strong> {country.population}</p>
                            <p><strong>Area:</strong> {country.area} km²</p>
                            <p><strong>Languages:</strong> {Object.values(country.languages).join(", ")}</p>
                            <p><strong>Currency:</strong> {Object.values(country.currencies).map(c => c.name).join(", ")}</p>
                            <p><strong>Code:</strong> {country.cca2} / {country.cca3}</p>
                        </div>
                    </div>


                })
            }


        </div>
    );
};

export default Cards;
