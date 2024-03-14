import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import instagramIcon from "../../assets/instagram.svg";
import { Link } from "react-router-dom";


export function Footer() {
  const routes: object = {
    githubLink: "https://github.com/taylor25jr",
    whatsappLink:
      "https://api.whatsapp.com/send?phone=3008559576&text=hola,soy luis",
    linkedinLink:
      "https://www.linkedin.com/in/luis-david-ferrer-conde-a5582a1b7/",
    telegramLink: "https://t.me/taylor25jr",
    instagramLink: "https://www.instagram.com/luistaylorjr/",
  };

  const {
    githubLink,
    linkedinLink,
    whatsappLink,
    telegramLink,
    instagramLink,
  } = routes as {
    githubLink: string;
    linkedinLink: string;
    whatsappLink: string;
    telegramLink: string;
    instagramLink: string;
  };

  return (
    <Container className="footer">
      <p className="logo">
        <span>Made by taylor</span>
      </p>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <Link to={linkedinLink} target="_blank" rel="noreferrer">
          <img src={linkedin} alt="Linkedin" />
        </Link>
        <Link to={githubLink} target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </Link>
        <Link to={whatsappLink} target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="Whatsapp" />
        </Link>
        <Link to={telegramLink} target="_blank" rel="noreferrer">
          <img src={telegram} alt="telegram" />
        </Link>
        <Link to={instagramLink} target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </Link>
      </div>
    </Container>
  );
}
