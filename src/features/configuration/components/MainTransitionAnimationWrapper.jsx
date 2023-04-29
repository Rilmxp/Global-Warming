import { motion } from "framer-motion";

// Sets the page transition for all routers in only one place.
const MainTransitionAnimationWrapper = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.main>
  );
};

export default MainTransitionAnimationWrapper;
