import { useEffect, useState } from 'react';
import CountryCard from './CountryCard.jsx';

const CountriesList = () => {
    const style = {
        display: "flex",
        flexWrap: "wrap",
        gap: "1.5rem 1rem",
        justifyContent: "space-evenly",
        marginTop: "2rem",
        maxWidth: "1200px",
        marginInline: "auto"
    };

    const [countriesData, setCountriesData] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=cca3,name,flags,capital,region,subregion,population,languages')
            .then(res => res.json())
            .then(data => {
                setCountriesData(data);
            });
    }, []);

    return (
        <div className="countries-list" style={style}>
            {countriesData.map(country => (

                <CountryCard
                    key={country.cca3}
                    code3={country.cca3}
                    name={country.name?.common}
                    officialName={country.name?.official}
                    flag={country.flags?.png}
                    flagAlt={`${country.flags?.alt} flag`}
                    capital={country.capital?.[0]}
                    region={country.region}
                    subregion={country.subregion}
                    population={country.population}
                    languages={Object.values(country.languages || {}).join(", ")}
                />
            ))
            }

        </div >
    );
};

export default CountriesList;
