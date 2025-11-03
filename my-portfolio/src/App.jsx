import Navbar from "./pages/Navbar.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Education from "./pages/Education.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./pages/Footer.jsx";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="font-sans bg-gray-950 min-h-screen">
      <Toaster position="top-right"/>
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
