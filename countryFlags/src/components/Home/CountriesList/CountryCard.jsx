import { Link } from "react-router-dom";

const CountryCardDetails = ({
  code3,
  name,
  officialName,
  flag,
  flagAlt,
  capital,
  region,
  subregion,
  population,
  languages,
  countryData
}) => {
  function slugify(name) {
    return name
      .toLowerCase()
      .replace(/ /g, "_") // replace spaces with _
      .replace(/[^\w-]+/g, ""); // remove non-word chars
  }

  return (
    <>
      <style>
        {`
          .country-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 16px;
            max-width: 280px;
            height: 100%;
            text-align: center;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          }
          .country-flag {
            width: 100%;
            height: 150px;
            border-radius: 4px;
            margin-bottom: 12px;
            border: 1px solid #ddd;
          }
          .country-title {
            margin: 8px 0;
            font-size: 1.2rem;
            opacity: 0.7;
            text-align: left;
          }
          .country-text {
            margin: 4px 0;
            font-size: 0.9rem;
            opacity: 0.7;
            text-align: left;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
        `}
      </style>

      <Link to={`/${slugify(name)}`} state={countryData}>
        <div className="country-card">
          <img src={flag} alt={flagAlt} className="country-flag" />
          <h2 className="country-title">
            {name} ({code3})
          </h2>
          <p className="country-text">
            <strong>Official Name:</strong> {officialName}
          </p>
          <p className="country-text">
            <strong>Capital:</strong> {capital || "N/A"}
          </p>
          <p className="country-text">
            <strong>Region:</strong> {region} ({subregion})
          </p>
          <p className="country-text">
            <strong>Population:</strong> {population.toLocaleString()}
          </p>
          <p className="country-text">
            <strong>Languages:</strong> {languages || "N/A"}
          </p>
        </div>
      </Link>
    </>
  );
};

export default CountryCardDetails;
