import { motion } from "motion/react";
import astro_icon from "../assets/astro.svg";
import astro_fall_icon from "../assets/astro_falling.svg";
import { useState } from "react";

function Astro() {
  let [booster, setBooster] = useState(true);

  let astro_click = () => {
    //TODO: Implement booster switching on and off transition
    setBooster(!booster);
  };

  return (
    <span
      onClick={() => {
        astro_click();
      }}
    >
      {booster ? (
        <motion.img
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{
            ease: "easeOut",
            duration: 2,
          }}
          width={"200px"}
          src={astro_icon}
          alt="astro"
        />
      ) : (
        <motion.img
          animate={{ y: "100vh" }}
          onAnimationComplete={() => {
            setBooster(!booster);
          }}
          transition={{ duration: 0.6 }}
          width={"200px"}
          src={astro_fall_icon}
          alt="astro_falling"
        />
      )}
    </span>
  );
}
export default Astro;
