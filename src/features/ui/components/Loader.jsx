import { IoEarth } from "react-icons/io5";
import { motion } from "framer-motion";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <motion.div
      className={styles.container}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <IoEarth className={styles.earthIcon} />

      <p>Processing data... </p>
    </motion.div>
  );
};

export default Loader;
