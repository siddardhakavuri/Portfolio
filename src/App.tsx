import "./App.css";
import { motion } from "motion/react";
import Astro from "./components/Astro";

function App() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: [0, 0, 0.5, 1], duration: 1.4, repeat: Infinity }}
      >
        {/* Coming soon */}
      </motion.h1>
      <Astro />
    </>
  );
}

export default App;
