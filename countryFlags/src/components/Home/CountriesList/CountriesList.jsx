import { useEffect, useState } from "react";
import CountryCard from "./CountryCard.jsx";
import { ShimmerAllCards } from "./Shimmer.jsx";

const CountriesList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=cca3,name,flags,capital,region,subregion,population,languages,borders"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      })
      .catch((err) => console.error("Failed to fetch countries:", err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // Load Shimmer effect
  if (isLoading) return <ShimmerAllCards />;
  if (!countriesData) {
    return (
      <p style={{ color: "red", margin: "2rem auto", textAlign: "center" }}>
        Country not found!
      </p>
    );
  }

  // Filter countries based on query (case-insensitive)
  const filteredCountries = countriesData.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredCountries.length === 0) {
    return (
      <p style={{ color: "red", margin: "2rem auto", textAlign: "center" }}>
        Country not exists!
      </p>
    );
  }

  return (
    <>
      <style>
        {`
            .countries-container{
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 1.5rem;
                align-items: stretch; 
                margin-top: 1.5rem; 
            }           
            `}
      </style>

      {
        <div className="countries-container">
          {filteredCountries.map((country) => (
            <CountryCard
              key={country.cca3}
              code3={country.cca3}
              name={country.name?.common}
              officialName={country.name?.official}
              flag={country.flags?.png}
              flagAlt={country.flags?.alt || `${country.name?.common} flag`}
              capital={country.capital?.[0]}
              region={country.region}
              subregion={country.subregion}
              population={country.population}
              languages={Object.values(country.languages || {}).join(", ")}
              countryData={country}
            />
          ))}
        </div>
      }
    </>
  );
};

export default CountriesList;
