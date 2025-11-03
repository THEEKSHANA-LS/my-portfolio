import { motion } from "framer-motion";
export default function Skills() {
  const technicalSkills = [
    // ... (technicalSkills data remains the same)
    { name: "HTML", level: 90 },
    { name: "CSS / Tailwind", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 75 },
    { name: "Node.js", level: 65 },
    { name: "MongoDB", level: 60 },
  ];
  const softSkills = [
    // ... (softSkills data remains the same)
    { name: "Team Collaboration", icon: "🤝" },
    { name: "Problem Solving", icon: "🧠" },
    { name: "Time Management", icon: "⏳" },
    { name: "Adaptability", icon: "🔄" },
    { name: "Communication", icon: "🗣️" },
    { name: "Leadership", icon: "👑" },
  ];
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 py-20 px-4 sm:px-6 text-gray-200" // Added sm:px-6 for better mobile edge spacing
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
        My Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-800/60 backdrop-blur-lg border border-gray-700 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:bg-gray-800 transition-all duration-500" // Improved hover effect
        >
          <h3 className="text-2xl font-bold mb-8 text-blue-400 border-b border-blue-400/30 pb-3">
            💻 Technical Skills
          </h3>
          <div className="space-y-6">
            {technicalSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-gray-300">
                    {skill.name}
                  </span>
                  <span className="text-gray-400 font-mono">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden"> {/* Reduced height for sleeker look */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-3 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-800/60 backdrop-blur-lg border border-gray-700 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:bg-gray-800 transition-all duration-500" // Improved hover effect
        >
          <h3 className="text-2xl font-bold mb-8 text-emerald-400 border-b border-emerald-400/30 pb-3">
            🌱 Soft Skills
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:gap-6"> {/* Increased gap */}
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(16, 185, 129, 0.4)" }} // Subtle lift and emerald glow
                className="bg-gray-700/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-lg transition-all duration-300 border border-transparent hover:border-emerald-500"
              >
                <span className="text-3xl sm:text-4xl mb-3">{skill.icon}</span>
                <span className="font-medium text-gray-300 text-sm sm:text-base">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}