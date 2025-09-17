// CountryDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShimmerCard } from "./Shimmer";

const CountryDetail = () => {
  const { name } = useParams(); // get country name from URL
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const countryName = name.replace(/_/g, " "); // replace _ with space for working

  console.log(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  );

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountry(data);
      })
      .catch((err) => {
        console.error("Error:", err); // Handle error
      })
      .finally(() => {
        setLoading(false); // Always runs
      });
  }, [countryName]);

  if (loading) return <ShimmerCard />;
  if (!country) return <p>Country not found.</p>;

  return (
    <>
      <style>
        {`
  .detail-container {
    max-width: fit-content; 
    margin: 2rem auto;
    padding: 2rem;
    background: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    font-family: Arial, sans-serif;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
  }

  .detail-flag {
    max-width: 350px;
    width:100%;
    border-radius: 6px;
  }

  .detail-info h1 {
    margin-top: 0;
    margin-bottom: 1rem;
    opacity: 0.8;
  }

  .detail-info p {
    margin: 0.5rem 0;
    opacity: 0.8;

  }

  @media (max-width:768px){
  .detail-container {
  flex-direction: column; 
  }
  .detail-flag{
  max-width:280px;
  }
  }
`}
      </style>

      <div className="detail-container">
        <img
          src={country.flags.svg}
          alt={country.flags.alt || country.name.common}
          className="detail-flag"
        />
        <div className="detail-info">
          <h1>{country.name.common}</h1>
          <p>
            <strong>Official Name:</strong> {country.name.official}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Subregion:</strong> {country.subregion}
          </p>
          <p>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Languages:</strong>{" "}
            {country.languages
              ? Object.values(country.languages).join(", ")
              : "N/A"}
          </p>
        </div>
      </div>
    </>
  );
};

export default CountryDetail;
