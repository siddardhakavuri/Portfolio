import Astro from "./components/Astro";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stars from "./components/Stars";

function App() {
  return (
    <div className="min-h-screen flex lg:flex-row justify-center max-w-400 mx-auto">
      <Stars />
      <div className="hidden md:flex items-center justify-center sticky top-0 h-screen p-15">
        <Astro />
      </div>
      <div className="w-full md:w-2/3 xl:px-24">
        <Navbar />
        <div className="max-w-4xl mx-auto">
          <main className="px-3 mt-12">
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
