import { Container } from "./styles";
import { AnimatePresence } from "framer-motion";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import telegram from "../../assets/telegram.svg";
import { Link } from "react-router-dom";

export function Hero() {

  const routes : object = {
    githubLink: "https://github.com/taylor25jr",
    whatsappLink: "https://api.whatsapp.com/send?phone=3008559576&text=hola,soy luis",
    linkedinLink: "https://www.linkedin.com/in/luis-david-ferrer-conde-a5582a1b7/",
    telegramLink: "https://t.me/taylor25jr",
  }

  
  const  {githubLink,linkedinLink,whatsappLink,telegramLink} =  routes as {
    githubLink: string,
    linkedinLink: string,
    whatsappLink: string,
    telegramLink: string,
  };


  return (
    <Container id="home">
      <div className="hero-text">
        <AnimatePresence>
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </AnimatePresence>
        <AnimatePresence>
          <h1>Luis Ferrer</h1>
        </AnimatePresence>
        <AnimatePresence>
          <h3>Front-end Developer</h3>
        </AnimatePresence>
        <AnimatePresence>
          <p className="small-resume">
            "Talent without working hard, is nothing"
          </p>
        </AnimatePresence>
        <AnimatePresence>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
        </AnimatePresence>
        <AnimatePresence>
          <div className="social-media">
            <Link
              to={linkedinLink}
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </Link>
            <Link
              to={githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </Link>
            <Link
              to={whatsappLink}
              target="_blank"
              aria-label="go to whatsapp"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </Link>
            <Link to={telegramLink} target="_blank" rel="noreferrer">
              <img src={telegram} alt="telegram" />
            </Link>
          </div>
        </AnimatePresence>
      </div>
      <div className="hero-image">
        <AnimatePresence>
          <img src={Illustration} alt="Ilustração" />
        </AnimatePresence>
      </div>
    </Container>
  );
}
