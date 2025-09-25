import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}
