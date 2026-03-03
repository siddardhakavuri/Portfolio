const Navbar = () => {
  return (
    <nav className="text-white hidden md:flex justify-between sticky top-0 z-50 px-3 py-6">
      <div className="absolute inset-0 -z-10 backdrop-blur-2xl mask-[linear-gradient(to_right,transparent_0.01rem,black_1rem,black_calc(100%-8%),transparent_100%)] pointer-events-none" />
      <a href="#" className="text-2xl ">
        SK
      </a>
      <div className="flex text-xl items-center overflow-auto">
        <a href="#about" className="pl-6">
          About
        </a>
        <a href="#experience" className="pl-6">
          Experience
        </a>
        <a href="#projects" className="pl-6">
          Projects
        </a>
        <a href="#contact" className="pl-6">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
