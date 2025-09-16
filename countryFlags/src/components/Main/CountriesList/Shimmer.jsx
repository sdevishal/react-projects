const CountryCardShimmer = () => {
    return (
        <>
            <style>
                {`
            .shimmer-container {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            gap: 16px;
            max-width:1200px;
            margin-inline:auto;
         }
          .shimmer-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 16px;
            min-width: 280px;
             min-height:400px;
            text-align: center;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          }

          .shimmer {
            position: relative;
            overflow: hidden;
            background: #e0e0e0;
            border-radius: 4px;
          }

          .shimmer::after {
            content: "";
            position: absolute;
            top: 0;
            left: -150px;
            height: 100%;
            width: 150px;
            background: linear-gradient(
              to right,
              transparent 0%,
              rgba(255, 255, 255, 0.6) 50%,
              transparent 100%
            );
            animation: shimmer 1.5s infinite;
          }

          @keyframes shimmer {
            100% {
              left: 100%;
            }
          }

          /* Flag placeholder */
          .shimmer.flag {
            width: 100%;
            height: 150px;
            border-radius: 4px;
            margin-bottom: 12px;
            border: 1px solid #ddd;
          }

          /* Title placeholder */
          .shimmer.title {
            height: 22px;
            width: 70%;
            margin: 8px 0;
          }

          /* Text placeholders */
          .shimmer.text {
            height: 16px;
            width: 100%;
            margin: 8px auto;
          }
        `}
            </style>

            <div className="shimmer-container">
                {[...Array(40)].map((_, i) => (
                    <div className="shimmer-card" key={i}>
                        <div className="shimmer flag"></div>
                        <div className="shimmer title"></div>
                        <div className="shimmer text"></div>
                        <div className="shimmer text"></div>
                        <div className="shimmer text"></div>
                        <div className="shimmer text"></div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CountryCardShimmer;
