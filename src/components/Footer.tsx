const Footer = () => {
  return (
    <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10 mt-20">
      <p>
        Designed & Built by{" "}
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Siddhu
        </a>
      </p>
      <p className="mt-2 text-xs opacity-75">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
