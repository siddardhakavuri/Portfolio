import { motion } from "motion/react";
import astro_icon from "../assets/astro_flying.svg";
import astro_fall_icon from "../assets/astro.svg";
import { useState } from "react";

function Astro() {
  const [booster, setBooster] = useState(true);
  const [inTransition, setInTransition] = useState(true);

  const astro_click = () => {
    if (inTransition) return;
    setInTransition(true);
    setBooster(!booster);
  };

  return (
    <div className={inTransition ? "cursor-default" : "cursor-pointer"}>
      {booster ? (
        <motion.img
          onClick={astro_click}
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          onAnimationStart={() => setInTransition(true)}
          onAnimationComplete={() => setInTransition(false)}
          transition={{
            ease: "easeOut",
            duration: 2,
          }}
          width={"60"}
          src={astro_icon}
          alt="astro"
        />
      ) : (
        <motion.img
          animate={{ y: "100vh" }}
          onAnimationStart={() => setInTransition(true)}
          onAnimationComplete={() => {
            setInTransition(false);
            setBooster(true);
          }}
          transition={{ duration: 1.2 }}
          width={"60"}
          src={astro_fall_icon}
          alt="astro_falling"
        />
      )}
    </div>
  );
}

export default Astro;
