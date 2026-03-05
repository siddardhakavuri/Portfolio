import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="text-white flex justify-between items-center sticky top-0 z-50 px-3 py-6">
      <div className="absolute inset-0 -z-10 backdrop-blur-2xl mask-[linear-gradient(to_right,transparent_0.01rem,black_1rem,black_calc(100%-2%),transparent_100%)] pointer-events-none" />

      {/* Logo */}
      <a href="#" className="text-2xl z-50">
        SK
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex text-xl items-center overflow-auto">
        <a href="#" className="pl-6 hover:text-gray-300 transition-colors">
          About
        </a>
        <a
          href="#experience"
          className="pl-6 hover:text-gray-300 transition-colors"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="pl-6 hover:text-gray-300 transition-colors"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="pl-6 hover:text-gray-300 transition-colors"
        >
          Contact
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden z-50 p-2 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center space-y-8 text-2xl ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <a
          href="#"
          onClick={toggleMenu}
          className="hover:text-gray-300 transition-colors"
        >
          About
        </a>
        <a
          href="#experience"
          onClick={toggleMenu}
          className="hover:text-gray-300 transition-colors"
        >
          Experience
        </a>
        <a
          href="#projects"
          onClick={toggleMenu}
          className="hover:text-gray-300 transition-colors"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={toggleMenu}
          className="hover:text-gray-300 transition-colors"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
