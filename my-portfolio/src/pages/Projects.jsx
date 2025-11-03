import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"; // Added icons for links

export default function Projects() {
  const projects = [
    {
      title: "InternLink (Internship Management System)",
      desc: "A powerful and user-friendly React.js application that streamlines internship management for students and administrators.",
      imageUrl: "internLink.png", 
      tech: ["HTML", "CSS", "JavaScript", "React JS", "Firebase API"],
      link: "#", // Assuming this is a live demo link or a project page link
      github: "https://github.com/THEEKSHANA-LS/InternLink.git" // Added explicit GitHub link if available
    },
    {
      title: "IntelliPrep (AI-Powered Interview Preparation Platform)",
      desc: "A React-based web application that leverages AI to help users prepare for interviews with personalized questions and feedback.",
      imageUrl: "intelliPrep.png", 
      tech: ["React JS", "Express.js", "TailwindCSS", "JavaScript", "Node.js", "MongoDB"],
      link: "https://intelliprep.app", // Placeholder for live link
      github: "https://github.com/THEEKSHANA-LS/intelli-prep.git",
    },
    {
      title: "ChatNest (Real-time Chat Application)",
      desc: "A full-stack web application built with React and Node.js, enabling real-time messaging and user authentication.",
      imageUrl: "chatNest.png", 
      tech: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      link: "#",
      github: "https://github.com/THEEKSHANA-LS/ChatNest-MERN-Stack-chat-application.git",
    },
    {
      title: "MERN Auth Web App",
      desc: "A React-based web application that provides user login, sign-up, JWT authentication, User Verification via OTP, and Password Reset via OTP.",
      imageUrl: "mernAuth.png", 
      tech: ["React JS", "Node.js", "MongoDB", "Express", "NodeMailer", "Brevo"],
      link: "#",
      github: "https://github.com/THEEKSHANA-LS/mern-auth-system.git",
    },
    {
      title: "Personal Portfolio Website",
      desc: "A React-based single page web site developed using React, Tailwind CSS, and Framer Motion, with integrated contact form via EmailJs.",
      imageUrl: "portfolio.png", 
      tech: ["React JS", "Tailwind CSS", "Framer Motion", "EmailJs"],
      link: "#",
      github: "https://github.com/THEEKSHANA-LS/my-portfolio.git",
    },
    // ... other projects
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-gray-200">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
        Featured Projects 🚀
      </h2>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto`}>
        {projects.map((p, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gray-800 rounded-xl shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group 
                       border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/30"
          >
            {/* Project Image */}
            <div className="w-full h-48 bg-gray-700 overflow-hidden">
              <img
                src={p.imageUrl}
                alt={p.title}
                // Image Scale effect on hover
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>

            {/* Project Content */}
            <div className="p-6 text-left flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-blue-400 transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm flex-grow leading-relaxed">
                {p.desc}
              </p>

              {/* Technologies Used (Tags) */}
              <div className="flex flex-wrap gap-2 mb-4 mt-auto pt-2 border-t border-gray-700/50">
                {p.tech.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    // Improved tag style for dark mode
                    className="bg-gray-700 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-lg shadow-inner"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex gap-4 mt-2">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-500 transition-colors duration-300"
                  aria-label={`View live project ${p.title}`}
                >
                  <FaExternalLinkAlt size={14} /> Live Demo
                </a>
                 <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors duration-300"
                  aria-label={`View GitHub repository for ${p.title}`}
                >
                  <FaGithub size={16} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}