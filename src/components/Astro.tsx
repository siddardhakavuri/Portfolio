import { motion } from "motion/react";
import astro_icon from "../assets/astro.svg";
import astro_fall_icon from "../assets/astro_falling.svg";
import { useState } from "react";

function Astro() {
  let [booster, setBooster] = useState(true);
  let in_transition: boolean = false;

  let astro_click = () => {
    //TODO: Implement quick sequence of booster on and off to give illusion of astro's disapproval
    setBooster(!booster);
  };

  return (
    <span
      onClick={() => {
        !in_transition && astro_click();
      }}
    >
      {booster
        ? !in_transition &&
          (in_transition = true) && (
            <motion.img
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              onAnimationComplete={() => {
                in_transition = false;
              }}
              transition={{
                ease: "easeOut",
                duration: 2,
              }}
              width={"200px"}
              src={astro_icon}
              alt="astro"
            />
          )
        : !in_transition && (
            <motion.img
              animate={{ y: "100vh" }}
              onAnimationComplete={() => {
                in_transition = false;
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
