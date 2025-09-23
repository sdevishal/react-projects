import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShimmerCard } from "./Shimmer";
import styles from "./CountryDetails.module.css";

const CountryDetails = () => {
  const { name } = useParams();
  const { state } = useLocation();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const countryName = name.replace(/_/g, " ");

  function updateCountryData(data) {
    setCountry({
      name: data.name?.common || "Unknown",
      officialName: data.name?.official || "Unknown",
      capital: data.capital?.[0] || "N/A",
      region: data.region || "N/A",
      subregion: data.subregion || "N/A",
      population: data.population?.toLocaleString() || "N/A",
      flag: data.flags?.svg || "",
      flagAlt: data.flags?.alt || data.name?.common || "Flag",
      borders: [],
      languages: data.languages
        ? Object.values(data.languages).join(", ")
        : "N/A",
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) => {
      setCountry((prevState) => ({ ...prevState, borders }));
    });
  }

  useEffect(() => {
    setLoading(true);

    if (state) {
      updateCountryData(state);
      setLoading(false);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [countryName]);

  if (loading) return <ShimmerCard />;
  if (!country) return <p>Country not found.</p>;

  return (
    <div className={styles.detailContainer}>
      <img
        src={country.flag}
        alt={country.flagAlt}
        className={styles.detailFlag}
      />
      <div className={styles.detailInfo}>
        <h1>{country.name}</h1>
        <p>
          <b>Official Name: </b>
          <span>{country.officialName}</span>
        </p>
        <p>
          <span>
            <b>Capital:</b> {country.capital}
          </span>
        </p>
        <p>
          <span>
            <b>Region:</b> {country.region}
          </span>
        </p>
        <p>
          <span>
            <b>Subregion:</b> {country.subregion}
          </span>
        </p>
        <p>
          <span>
            <b>Population:</b> {country.population}
          </span>
        </p>

        {country.languages.length > 0 && (
          <p>
            <b>Languages: </b>
            <span>{country.languages}</span>
          </p>
        )}

        {country.borders.length > 0 && (
          <div className={styles.borders}>
            <b>Borders:</b>
            <div className={styles.bordersList}>
              {country.borders.map((border) => (
                <Link key={border} to={`/${border}`}>
                  <span className={styles.borderPill}>{border}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetails;
