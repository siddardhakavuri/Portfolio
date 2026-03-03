const Navbar = () => {
  return (
    <nav className="text-white hidden md:flex justify-between sticky backdrop-blur-2xl top-0 z-50 py-6">
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
