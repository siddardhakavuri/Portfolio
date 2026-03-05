import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user is near the bottom of the page (within 50 pixels)
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;
      setIsAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    // Call once on mount in case they start at the bottom
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#"
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 group"
    >
      <button
        className={`p-3 rounded-full bg-transparent text-white shadow-lg backdrop-blur-md transition-all duration-300 group-hover:border-cyan-400/50 group-hover:text-cyan-400 group-hover:bg-cyan-400/10 ${
          isAtBottom ? "animate-bounce" : "group-hover:-translate-y-1"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </a>
  );
};

export default ScrollToTop;
