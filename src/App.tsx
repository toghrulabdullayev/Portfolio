import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar /> {/* Move nav to the center and create a theme switcher */}
      <Hero /> {/* Fix the canvas responsiveness. Add RN, Tailwind, Vite, Three.js 3D models */}
      <About />
      <Projects /> {/* Change the pc's model and try to optimize the video there */}
      <Clients />
      <Experience /> {/* Add experience and change the canvas responsiveness */}
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
