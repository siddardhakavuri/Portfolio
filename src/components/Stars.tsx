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
    // Generate stars dynamically on mount
    const generateStars = () => {
      const newStars = Array.from({ length: 120 }).map((_, i) => ({
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
          className="absolute bg-white rounded-full animate-pulse shadow-[0_0_15px_3px_rgba(255,255,255,0.7)]"
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
