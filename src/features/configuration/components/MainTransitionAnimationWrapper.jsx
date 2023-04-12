import { motion } from "framer-motion";

const MainTransitionAnimationWrapper = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      // exit={{ opacity: 1 }}
    >
      {children}
    </motion.main>
  );
};

export default MainTransitionAnimationWrapper;
