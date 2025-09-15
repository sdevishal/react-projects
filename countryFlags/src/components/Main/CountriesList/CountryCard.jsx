
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
    languages
}) => {
    const style = {
        countryCard: {
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            maxWidth: "280px",
            textAlign: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        },
        countryFlag: {
            width: "100%",
            height: "150px",
            borderRadius: "4px",
            marginBottom: "12px",
            border: "1px solid #ddd"
        },
        title: {
            margin: "8px 0",
            fontSize: "1.2rem",
            opacity: "0.7",
            textAlign: "left"
        },
        text: {
            margin: "4px 0",
            fontSize: "0.9rem",
            opacity: "0.7",
            textAlign: "left"
        }
    };

    return (
        <div style={style.countryCard}>
            <img src={flag} alt={flagAlt} style={style.countryFlag} />
            <h2 style={style.title}>{name} ({code3})</h2>
            <p style={style.text}><strong>Official Name:</strong> {officialName}</p>
            <p style={style.text}><strong>Capital:</strong> {capital || "N/A"}</p>
            <p style={style.text}><strong>Region:</strong> {region} ({subregion})</p>
            <p style={style.text}><strong>Population:</strong> {population.toLocaleString()}</p>
            <p style={style.text}><strong>Languages:</strong> {languages || "N/A"}</p>
        </div>
    );
};

export default CountryCard;


