const shimmerStyle = `
  .shimmer {
  background: #e0e0e0;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}
.shimmer::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100px;
  height: 100%;
  width: 100px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  animation: shimmer 2s infinite; /* slower, subtle */
}

  @keyframes shimmer {
    100% {
      left: 100%;
    }
  }
`;

export const ShimmerAllCards = () => {
  return (
    <>
      <style>{`
        ${shimmerStyle}
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
          min-height: 400px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
        .shimmer.flag { width: 100%; height: 150px; margin-bottom: 12px; }
        .shimmer.title { height: 20px; width: 70%; margin: 10px 0; }
        .shimmer.text { height: 20px; width: 100%; margin: 10px 0; }
      `}</style>

      <div className="shimmer-container">
        {Array.from({ length: 20 }).map((el, i) => (
          <div className="shimmer-card" key={i}>
            <div className="shimmer flag"></div>
            <div className="shimmer title"></div>
            <div className="shimmer text"></div>
            <div className="shimmer text"></div>
            <div className="shimmer text"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export const ShimmerCard = () => {
  return (
    <>
      <style>{`
        ${shimmerStyle}
        .shimmer-container {
          {/* max-width: 800px; */}.
          {/* width:100%; */}
          margin: 2rem auto;
          padding: 2rem;
          background: #f5f5f5;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .shimmer.flag { max-width: 300px; width:100%; height: 200px; flex-shrink: 0; }
        .info {
        flex: 1;
        {/* border: 2px solid green; */}
        min-width: 300px;
        }
        .shimmer.line { height: 24px; margin: 10px 0; }
        .shimmer.big { height: 24px; width: 60%; margin-bottom: 20px; }
        @media (max-width: 768px){
        .shimmer-container {
        flex-direction: column;
        width: fit-content;
        }
        }
        @media(max-width:440px){
        .shimmer-container{
        width: 330px;
        }
        .shimmer.flag{
        width: 280px;
        }
        }

      `}</style>

      <div className="shimmer-container">
        <div className="shimmer flag"></div>
        <div className="info">
          <div className="shimmer big"></div>
          <div className="shimmer line"></div>
          <div className="shimmer line"></div>
          <div className="shimmer line"></div>
          <div className="shimmer line"></div>
        </div>
      </div>
    </>
  );
};
