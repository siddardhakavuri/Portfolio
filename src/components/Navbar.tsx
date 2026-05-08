import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    const ratioMap: Record<string, number> = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratioMap[entry.target.id] = entry.intersectionRatio;
        });
        // Pick the section with the highest visible ratio
        const best = Object.entries(ratioMap).reduce(
          (acc, [id, ratio]) => (ratio > acc.ratio ? { id, ratio } : acc),
          { id: "", ratio: 0 }
        );
        if (best.ratio > 0) setActiveSection(best.id);
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (href: string) => {
    const isActive = activeSection === href.slice(1);
    return `pl-6 font-semibold transition-colors ${
      isActive
        ? "bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        : "hover:bg-linear-to-r from-cyan-400 to-blue-500 hover:bg-clip-text hover:text-transparent"
    }`;
  };

  const mobileLinkClass = (href: string) => {
    const isActive = activeSection === href.slice(1);
    return `font-semibold transition-colors ${
      isActive
        ? "bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        : "hover:bg-linear-to-r from-cyan-400 to-blue-500 hover:bg-clip-text hover:text-transparent"
    }`;
  };

  return (
    <nav className="text-white flex justify-between items-center sticky top-0 z-50 px-3 py-6">
      <div className="absolute inset-0 -z-10 backdrop-blur-2xl lg:mask-[linear-gradient(to_right,transparent_0.01rem,black_1rem,black_calc(100%-2%),transparent_100%)] pointer-events-none" />

      <a
        href="#"
        aria-label="Home"
        className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent z-50"
      >
        SK
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex text-xl items-center overflow-auto">
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} className={linkClass(href)}>
            {label}
          </a>
        ))}
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
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={toggleMenu}
            className={mobileLinkClass(href)}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
