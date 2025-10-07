// --- SKILLS SECTION ---
import { motion } from "framer-motion";
export default function Skills() {
  const technicalSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS / Tailwind", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 75 },
    { name: "Node.js", level: 65 },
    { name: "MongoDB", level: 60 },
  ];
  const softSkills = [
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
      className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 py-20 px-6 text-gray-200"
    >
      <h2 className="text-3xl font-bold mb-6 flex justify-center text-blue-400">
        My Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
        >
          <h3 className="text-2xl font-bold mb-8 text-blue-400">
            💻 Technical Skills
          </h3>
          <div className="space-y-6">
            {technicalSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-gray-300">
                    {skill.name}
                  </span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-4 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-md"
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
          className="bg-gray-800/40 backdrop-blur-lg border border-gray-700 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
        >
          <h3 className="text-2xl font-bold mb-8 text-emerald-400">
            🌱 Soft Skills
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="bg-gray-700/60 backdrop-blur-md rounded-xl p-6 flex flex-col items-center justify-center shadow hover:shadow-lg transition"
              >
                <span className="text-4xl mb-3">{skill.icon}</span>
                <span className="font-semibold text-gray-300 text-center">
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