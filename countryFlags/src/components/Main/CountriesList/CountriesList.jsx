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

    return (
        <div className="countries-list" style={style}>
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
        </div>
    );
};

export default CountriesList;
