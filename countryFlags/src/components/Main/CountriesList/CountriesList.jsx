import { useEffect, useState } from "react";
import CountryCard from "./CountryCard.jsx";
import Shimmer from "./Shimmer.jsx";

const CountriesList = ({ query }) => {
    const [countriesData, setCountriesData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            "https://restcountries.com/v3.1/all?fields=cca3,name,flags,capital,region,subregion,population,languages"
        )
            .then((res) => res.json())
            .then((data) => {
                setCountriesData(data);
                setLoading(false);
            });
    }, []);

    // Filter countries based on query (case-insensitive)
    const filteredCountries = countriesData.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <style>
                {`
            .countries-container{
                display: flex;
                flex-wrap: wrap;
                gap: 1.5rem 1rem;
                justify-content: space-evenly;
                margin-top: 2rem;
                max-width: 1200px;
                margin-inline: auto;
            }
            `}
            </style>

            {loading === true ? (
                <Shimmer />
            ) : (
                <div className="countries-container">
                    {filteredCountries.map((country) => (
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
                    ))}
                </div>
            )}
        </>
    );
};

export default CountriesList;
