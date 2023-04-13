import { FaGithub } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Rilmxp/global-warming"
        title="Github"
      >
        <FaGithub />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://rilmxp.github.io/Portfolio/"
        title="Portfolio"
      >
        <FaBriefcase />
      </a>
    </footer>
  );
};

export default Footer;
