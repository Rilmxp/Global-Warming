import { motion } from "framer-motion";
import styles from "./ErrorMessage.module.scss";

const ErrorMessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className={styles.errorMsg}
    >
      <p>
        Unable to elaborate graph. Source data currently unavailable. Please try
        again later.
      </p>
    </motion.div>
  );
};

export default ErrorMessage;
