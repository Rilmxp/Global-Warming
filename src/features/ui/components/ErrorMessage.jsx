import { motion } from "framer-motion";
import styles from "./ErrorMessage.module.scss";

const ErrorMessage = () => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className={styles.errorMsg}
    >
      Source data currently unavailable. Please try again later
    </motion.p>
  );
};

export default ErrorMessage;
