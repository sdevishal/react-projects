import React from "react";

const AboutUs = () => {
  return (
    <>
      <style>
        {`
          .about-container {
            max-width: 800px;
            margin: 2rem auto;
            padding: 2rem;
            background-color: #f5f5f5;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            font-family: Arial, sans-serif;
            line-height: 1.6;
          }

          .about-container h1 {
            text-align: center;
            margin-bottom: 1rem;
            font-size: 2rem;
          }

          .about-container p {
            margin-bottom: 1rem;
            color: #333;
          }

          .about-container ul {
            list-style: disc;
            margin-left: 1.5rem;
          }
        `}
      </style>

      <div className="about-container">
        <h1>About This Project</h1>
        <p>
          Welcome! This project fetches data about countries from a public API and displays it in an interactive interface.
        </p>
        <p>
          Features include:
        </p>
        <ul>
          <li>Search countries by name</li>
          <li>View country details including flags, population, capital, region, and languages</li>
          <li>Responsive design for a clean and accessible layout</li>
        </ul>
        <p>
          This project is built using React and demonstrates API fetching, state management, and dynamic rendering.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
