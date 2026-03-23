import { motion } from "motion/react";
import astro_icon from "../assets/astro_flying.svg";
import astro_fall_icon from "../assets/astro.svg";
import astro_fuel_cut_icon from "../assets/astro_fuel_cut.svg";
import { useState, useEffect } from "react";

function Astro() {
  const [phase, setPhase] = useState<"flying" | "fuel_cut" | "falling">("flying");
  const [inTransition, setInTransition] = useState(true);

  useEffect(() => {
    if (phase === "fuel_cut") {
      const timer = setTimeout(() => {
        setPhase("falling");
      }, 1300);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const astro_click = () => {
    if (inTransition) return;
    setInTransition(true);
    setPhase("fuel_cut");
  };

  return (
    <button 
      onClick={astro_click}
      aria-label="Interact with Astro animation"
      className={`focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none rounded-lg p-1 ${inTransition ? "cursor-default" : "cursor-pointer"}`}
      disabled={inTransition}
    >
      {phase === "flying" ? (
        <motion.img
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
      ) : phase === "fuel_cut" ? (
        <motion.img
          width={"60"}
          src={astro_fuel_cut_icon}
          alt="astro fuel cut"
        />
      ) : (
        <motion.img
          animate={{ y: "100vh" }}
          onAnimationStart={() => setInTransition(true)}
          onAnimationComplete={() => {
            setInTransition(false);
            setPhase("flying");
          }}
          transition={{ duration: 1.2 }}
          width={"60"}
          src={astro_fall_icon}
          alt="astro falling"
        />
      )}
    </button>
  );
}

export default Astro;
