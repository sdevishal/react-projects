
const Footer = () => {
    return (
        <>
            <style>
                {`
          .footer {
            background-color: #222;
            color: #fff;
            text-align: center;
            padding: 16px;
            margin-top: 2rem;
          }
            .links{
            margin-block: .5rem;
            }
          .footer a {
            color: #fff;
            text-decoration: none;
            margin: 0 6px;
          }

          .footer a:hover {
            text-decoration: underline;
          }
        `}
            </style>

            <footer className="footer">
                <p>© 2025 MyWebsite. All rights reserved.</p>
                <div className="links">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a> |
                    <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a> |
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
            </footer>
        </>
    );
};

export default Footer;
