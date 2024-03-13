import { Container } from "./styles";
import taylor from "../../assets/Taylor.png";
import sass from "../../assets/sass.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import vite from "../../assets/vite.svg";
import postmanIcon from "../../assets/postman.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import git from "../../assets/git.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import { motion, AnimatePresence } from "framer-motion";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <AnimatePresence>
          <motion.h2
            key="about-me"
            transition={{ duration: 2 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            About me
          </motion.h2>
        </AnimatePresence>
        <AnimatePresence>
          <motion.p
            key="paragraph1"
            transition={{ duration: 2 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            Hi there! I'm Luis, a website developer with a passion for creating
            custom online experiences for my clients. With a skill set including
            HTML, CSS, JavaScript, and React, I have the tools to bring any
            website vision to life.
          </motion.p>
        </AnimatePresence>
        <AnimatePresence>
          <motion.p
            key="paragraph2"
            transition={{ duration: 2 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            But my services go beyond just custom development - I'm also
            proficient in using some tools like Git, Postman, Frameworks Css
            such as Bootstrap and Material UI.
          </motion.p>
        </AnimatePresence>
        <AnimatePresence>
          <motion.p
            key="paragraph3"
            transition={{ duration: 2 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            So if you're in need of a new website or just looking to revamp your
            current online presence, I'd love to chat and see how I can help.
            Let's bring your website dreams to reality together!
          </motion.p>
        </AnimatePresence>
        <AnimatePresence>
          <motion.h3
            key="skills-heading"
            transition={{ duration: 2 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            Here are my main skills:
          </motion.h3>
        </AnimatePresence>
        <div className="hard-skills">
          <div className="hability">
            <AnimatePresence>
              <img src={sass} alt="sass" />
            </AnimatePresence>
          </div>
          <div className="hability">
            <AnimatePresence>
              <img src={reactIcon} alt="React" />
            </AnimatePresence>
          </div>
          <div className="hability">
            <AnimatePresence>
              <img src={typescriptIcon} alt="Typescript" />
            </AnimatePresence>
          </div>
          <div className="hability">
            <AnimatePresence>
              <img src={git} alt="Git" />
            </AnimatePresence>
          </div>
          <div className="hability">
            <AnimatePresence>
              <img src={vite} alt="Vite" />
            </AnimatePresence>
          </div>
          <div className="hability">
            <AnimatePresence>
              <img src={htmlIcon} alt="Html" />
            </AnimatePresence>
          </div>
          <div className="hability">
            <AnimatePresence>
              <img src={cssIcon} alt="Css" />
            </AnimatePresence>
          </div>
          <div className="hability">
            <AnimatePresence>
              <img src={boostrapIcon} alt="bootstrap" />
            </AnimatePresence>
          </div>
          <div className="hability">
            <AnimatePresence>
              <img src={postmanIcon} alt="postman" />
            </AnimatePresence>
          </div>
          <div className="hability">
            <AnimatePresence>
              <img src={jsIcon} alt="JavaScript" />
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="about-image">
        <AnimatePresence>
          <motion.img
            key="skills-heading"
            transition={{ duration: 9 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ borderRadius: "50%", height: "850px", opacity: "0.6" }}
            src={taylor}
            alt="Vinayak Singh"
            className="imgAbout"
          />
        </AnimatePresence>
      </div>
    </Container>
  );
}
