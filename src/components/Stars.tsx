import { useEffect, useState } from "react";

const Stars = () => {
  const [stars, setStars] = useState<
    {
      id: number;
      top: string;
      left: string;
      size: string;
      opacity: number;
      animationDelay: string;
      animationDuration: string;
    }[]
  >([]);

  useEffect(() => {
    // Generate stars dynamically
    const generateStars = () => {
      // Control number of stars for large and small screens independently
      const isMobile = window.innerWidth < 768;

      const numStars = isMobile
        ? Math.floor((window.innerWidth * window.innerHeight) / 6000) // Small screens configuration
        : Math.floor((window.innerWidth * window.innerHeight) / 14000); // Large screens configuration

      const newStars = Array.from({ length: numStars }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 2.5 + 1}px`,
        opacity: Math.random() * 0.7 + 0.3,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${Math.random() * 3 + 2}s`,
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-pulse shadow-[0_0_10px_2px_rgba(255,255,255,0.7)]"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: star.animationDelay,
            animationDuration: star.animationDuration,
          }}
        />
      ))}
    </div>
  );
};

export default Stars;
