import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Shuruat mein gayab aur niche hoga
      animate={{ opacity: 1, y: 0 }}  // Page aane par dikhega aur upar aayega
      exit={{ opacity: 0, y: -20 }}   // Page jane par upar slide hokar gayab hoga
      transition={{ duration: 1, ease: "easeOut" }} // 0.5 sec ki speed
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;