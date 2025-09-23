import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gray-950 text-gray-300 px-6 py-20"
    >
      {/* Left Side: Text Content */}
      <div className="text-center md:text-left md:w-1/2 md:pr-12 mb-10 md:mb-0">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-blue-400">
            Hi, I'm Sandun 👋
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 font-medium">
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
        </motion.div>

        {/* About Section Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg leading-relaxed text-gray-400">
            I'm a Software Technology Undergraduate student at the Faculty Of Technology University of Sri Jayewardenepura, passionate about web development in MERN Stack, UI/UX design, and building user-friendly web applications. I enjoy learning new technologies and applying them to real-world projects.
          </p>
          
          {/* Action Buttons Section */}
          <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center md:justify-start">
            {/* Resume Buttons */}
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-600 transition-colors duration-300"
            >
              View Resume
            </a>
            <a 
              href="/resume.pdf" 
              download 
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-emerald-700 transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Profile Photo */}
      <motion.div
        className="md:w-1/3 flex justify-center md:justify-end"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src="/profile.jpeg"
          alt="Sandun Theekshana"
          className="w-56 h-56 md:w-80 md:h-80 rounded-full shadow-2xl border-4 border-blue-600 object-cover"
        />
      </motion.div>
    </section>
  );
}