const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer {
            text-align: center;
            padding: 1rem;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            border-top: 1px solid var(--header-footer-border);
            }               
          .links {
            margin-top: 0.5rem;
          }
          .footer a {
            color: var(--text-color);
            text-decoration: none;
            margin: 0 6px;
          }                  
          .footer a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <footer className="footer">
        <p>CountryFlag © 2025. All rights reserved.</p>
        <div className="links">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter
          </a>{" "}
          |
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>{" "}
          |
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
