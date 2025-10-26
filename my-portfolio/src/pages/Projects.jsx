import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "InternLink (Internship Management System)",
      desc: "A powerful and user-friendly React.js application that streamlines internship management for students and administrators.",
      imageUrl: "InternLink.png", // Path to your project image
      tech: ["HTML", "CSS", "JavaScript", "React JS", "Firebase API"],
      link: "#",
    },
    {
      title: "IntelliPrep (AI-Powered Interview Preparation Platform)",
      desc: "A React-based web application that leverages AI to help users prepare for interviews with personalized questions and feedback.",
      imageUrl: "IntelliPrep.png", // Path to your project image
      tech: ["React JS", "Express.js", "TailwindCSS", "JavaScript", "Node.js", "MongoDB"],
      link: "https://github.com/THEEKSHANA-LS/intelli-prep.git",
    },
    {
      title: "ChatNest (Real-time Chat Application)",
      desc: "A full-stack web application built with React and Node.js, enabling real-time messaging and user authentication.",
      imageUrl: "ChatNest.png", // Path to your project image
      tech: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/THEEKSHANA-LS/ChatNest-MERN-Stack-chat-application.git",
    },
    {
      title: "MERN auth web app",
      desc: "A React-based web application that provides user login, sign-up, JWT authentication, User Verification via OTP, Password Reset via OTP",
      imageUrl: "MERNauth.png", // Path to your project image
      tech: ["React JS", "API", "HTML", "CSS", "JavaScript", "NodeMailer", "Brevo", "MongoDB", "Express", "Node.js"],
      link: "https://github.com/THEEKSHANA-LS/mern-auth-system.git",
    },
    {
      title: "Personal Portfolio Website",
      desc: "A React-based single page web site develop using react, tailwind and framer motion, toast, EmailJs.",
      imageUrl: "portfolio.png", // Path to your project image
      tech: ["React JS", "HTML", "CSS", "JavaScript", "EmailJs"],
      link: "https://github.com/THEEKSHANA-LS/my-portfolio.git",
    },
    
    // Add more projects here following the same structure
    // {
    //   title: "Your Project Title",
    //   desc: "A brief description of your project.",
    //   imageUrl: "/images/your-project.png",
    //   tech: ["React", "Tailwind", "Firebase"],
    //   link: "#",
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-t from-gray-950 via-gray-900 to-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-12 text-blue-400">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {projects.map((p, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Project Image */}
            <div className="w-full h-48 bg-gray-700 overflow-hidden flex items-center justify-center">
              <img
                src={p.imageUrl}
                alt={p.title}
                className="w-full h-full object-cover" // Ensure image covers the area
              />
            </div>

            {/* Project Content */}
            <div className="p-6 text-left flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-gray-100">{p.title}</h3>
              <p className="text-gray-400 mb-4 text-sm flex-grow">{p.desc}</p>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-blue-600/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Project Link */}
              <a
                href={p.link}
                className="text-blue-400 hover:text-blue-500 hover:underline transition-colors duration-300 self-start mt-auto"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}