import Astro from "./components/Astro";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stars from "./components/Stars";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-w-2xs min-h-screen flex lg:flex-row justify-center max-w-400 mx-auto">
      <Stars />
      <div className="hidden lg:flex items-center justify-center sticky top-0 h-screen px-15">
        <Astro />
      </div>
      <div className="w-full lg:w-2/3 ">
        <Navbar />
        <div className="">
          <main className="px-3 mt-12">
            <About />
            <Experience />
            <Projects />
            <Contact />
            <ScrollToTop />
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
