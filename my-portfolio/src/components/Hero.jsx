import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

// --- HERO SECTION ---
export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row justify-center items-center bg-gray-950 px-6"
    >
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-400">
          Hi, I'm Sandun 👋
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-6">
          <ReactTyped
            strings={[
              "Web Developer 💻",
              "Student 🎓",
              "Tech Enthusiast 🚀",
              "UI/UX Learner 🎨",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </p>
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          View My Work
        </a>
      </div>
      <motion.div
        className="mt-10 md:mt-0 md:w-1/3 flex justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src="/profile.jpeg"
          alt="Sandun Theekshana"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg border-4 border-blue-600 object-cover"
        />
      </motion.div>
    </section>
  );
}
