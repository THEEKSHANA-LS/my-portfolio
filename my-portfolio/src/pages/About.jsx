import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <section
      id="about"
      // Added more vertical padding and max-width for content comfort
      className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gray-950 text-gray-300 px-4 sm:px-8 py-20" 
    >
      {/* Profile Image (Mobile: Top + Center, Desktop: Right) */}
      <motion.div
        // Changed w-1/3 to w-full sm:w-1/2 md:w-1/3 for better control
        className="flex justify-center mb-10 md:mb-0 w-full sm:w-1/2 md:w-1/3 md:order-2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src="/profile.png"
          alt="Sandun Theekshana"
          // Increased size slightly, added modern border/ring effect
          className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full shadow-2xl object-cover 
                     border-4 border-blue-600 ring-4 ring-offset-8 ring-offset-gray-950 ring-blue-600/50"
        />
      </motion.div>

      {/* Text Section */}
      <div className="text-center md:text-left md:w-1/2 md:order-1 md:pr-12 mt-10 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 text-blue-400">
            Hi, I'm Sandun 👋
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 font-medium">
            <ReactTyped
              strings={[
                "Web Developer 💻",
                "Undergraduate Student 🎓",
                "UI/UX Learner 🎨",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </p>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg leading-relaxed text-gray-400">
            I'm a Software Technology Undergraduate student at the Faculty Of Technology University of Sri Jayewardenepura, passionate about web development in MERN Stack, UI/UX design, and building user-friendly web applications. I enjoy learning new technologies and applying them to real-world projects.
          </p>

          {/* Action Buttons (Improved spacing and hover effects) */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-[1.05]"
            >
              View My Work
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-emerald-700 transition-colors duration-300 transform hover:scale-[1.05]"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}