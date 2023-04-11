import styles from "./Banner.module.scss";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <header className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1>Our Battle Against Climate Change Begins with Knowledge</h1>
        <motion.blockquote
          transition={{
            type: "spring",
            duration: 5,
          }}
          animate={{ x: [-window.innerWidth, 0] }}
        >
          <p>
            “Education is the most powerful weapon which you can use to change
            the world.” -Nelson Mandela
          </p>
        </motion.blockquote>
      </div>
    </header>
  );
};

export default Banner;
