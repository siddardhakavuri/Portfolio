const Footer = () => {
  return (
    <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10 mt-20">
      <p className="mt-2 text-xs opacity-75">
        &copy; {new Date().getFullYear()} Siddardha Kavuri. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
