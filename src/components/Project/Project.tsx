import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg";
import { AnimatePresence } from "framer-motion";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <AnimatePresence>
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://drummer-house.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Drummer House</h3>
              <p>
                This website is SPA which contain information about a drummer.
                this page was made using React.js, ReactRouter-Dom and some Css
                libraries
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
              </ul>
            </footer>
          </div>
        </AnimatePresence>

        <AnimatePresence>
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://org-react-two.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>ORG</h3>
              <p>
                This website is a SPA which allows you create teams for work.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
              </ul>
            </footer>
          </div>
        </AnimatePresence>

        <AnimatePresence>
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://taylor25jr.github.io/lorem-shop/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Lorem Shop</h3>
              <p>
                This website sells electronics products. This page was made
                using Javascript, Html and Bootstrap css.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Javascript</li>
                <li>Ecommerce</li>
              </ul>
            </footer>
          </div>
        </AnimatePresence>
      </div>
    </Container>
  );
}
