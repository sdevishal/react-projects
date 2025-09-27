import { Link } from "react-router-dom";

const CountryCard = ({
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
  countryData,
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
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            background-color: var(--card-bg);
            height: 100%;
          }
          .country-flag img {
            width: 100%;
            height: 150px;
            border-radius: 4px 4px 0px 0px;
          }
          .country-info{
          padding: 1rem;  
          }
          .country-title {
            margin: 8px 0;
            font-size: 1.2rem;
            text-align: left;
          }
          .country-text {
            margin: 4px 0;
            font-size: 0.9rem;
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
          <div className="country-flag">
            <img src={flag} alt={flagAlt} />
          </div>
          <div className="country-info">
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
        </div>
      </Link>
    </>
  );
};

export default CountryCard;
