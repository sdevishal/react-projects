
const CountryCard = () => {
    const style = {
        countryCard: {
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            maxWidth: "280px",
            textAlign: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        },
        countryFlag: {
            width: "100%",
            borderRadius: "4px",
            marginBottom: "12px"
        },
        title: {
            margin: "8px 0",
            fontSize: "1.2rem",
            opacity: '0.7'
        },
        text: {
            margin: "4px 0",
            fontSize: "0.9rem",
            opacity: '0.7'
        }
    };

    return (
        <div style={style.countryCard}>
            <img
                src="https://flagcdn.com/w320/ee.png"
                alt="Flag of Estonia"
                style={style.countryFlag}
            />
            <h2 style={style.title}>Estonia</h2>
            <p style={style.text}><strong>Official Name:</strong> Republic of Estonia</p>
            <p style={style.text}><strong>Capital:</strong> Tallinn</p>
            <p style={style.text}><strong>Region:</strong> Europe (Northern Europe)</p>
            <p style={style.text}><strong>Population:</strong> 1,331,057</p>
            <p style={style.text}><strong>Language:</strong> Estonian</p>
        </div>
    );
};

export default CountryCard

