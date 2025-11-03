import { motion } from "framer-motion";

export default function Education() {
  const education = [
    // ... (rest of education data remains the same)
    {
      degree: "B (Hons) in Information and Communication Technology",
      school: "University of Sri Jayewardenepura",
      year: "2022 – Present",
      desc: "Focusing on Web Development and Software Engineering.",
      active: true 
    },
    {
      degree: "G.C.E Advanced Level (Technology Stream)",
      school: "Embilipitiya President's College",
      year: "2019 – 2021",
      desc: "Completed studies in Engineering Technology and ICT.",
      active: false
    },
    {
      degree: "G.C.E Ordinary Level",
      school: "Embilipitiya President's College",
      year: "2018",
      desc: "Achieved excellent results with a 3A's 3B's and 3C's.",
      active: false
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-950 text-gray-300">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
        Education
      </h2>
      <div className="relative max-w-3xl mx-auto px-6">
        {/* Vertical Timeline Line */}
        {/* Mobile: left-5 (or equivalent), Desktop: left-1/2 */}
        <div className={`absolute top-0 bottom-0 left-5 sm:left-1/2 sm:-translate-x-1/2 w-0.5 bg-gray-700/70`}></div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              // Mobile: Always flex-row, Desktop: Alternating
              className={`relative flex items-center w-full ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } flex-row`} // Added 'flex-row' for mobile consistency
            >
              {/* Timeline Dot (Accent) */}
              {/* Mobile: Always left-5, Desktop: left-1/2 */}
              <div 
                  className={`w-4 h-4 rounded-full absolute left-[18px] sm:left-1/2 sm:-translate-x-1/2 z-10 
                  transition-all duration-300 ease-in-out transform 
                  ${edu.active ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50 scale-125' : 'bg-blue-500 hover:bg-blue-400'}`}
              ></div>

              {/* Content Box */}
              {/* Mobile: Use full width, no px-6. Desktop: w-1/2 px-6 */}
              <div 
                className={`w-full sm:w-1/2 ${
                  index % 2 === 0 ? "sm:pr-12 pl-12" : "sm:pl-12 pr-12"
                } pl-12`} // Ensures left padding on mobile for the line
              >
                <div 
                    className={`p-6 rounded-xl shadow-2xl transition-all duration-300 
                    ${edu.active ? 'bg-gray-700 border-2 border-emerald-500' : 'bg-gray-800 hover:bg-gray-700'}`}
                >
                  <p className={`text-sm mb-1 font-mono tracking-wider ${edu.active ? 'text-emerald-400' : 'text-blue-400'}`}>{edu.year}</p>
                  <h3 className="text-xl font-bold mb-1 text-gray-100">{edu.degree}</h3>
                  <p className="text-gray-400 mb-2">{edu.school}</p>
                  <p className="text-sm text-gray-400">{edu.desc}</p>
                </div>
              </div>

              {/* Spacer - Only needed for desktop alternating layout */}
              <div className="hidden sm:block w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}