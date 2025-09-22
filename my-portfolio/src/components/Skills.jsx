export default function Skills() {
    const skills = [
      { name: "HTML", level: "Advanced" },
      { name: "CSS / Tailwind CSS", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React.js", level: "Intermediate" },
      { name: "Node.js", level: "Beginner" },
      { name: "MongoDB", level: "Beginner" },
      { name: "UI/UX Design", level: "Intermediate" },
    ];
  
    return (
      <section id="skills" className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 px-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="text-gray-600">{skill.level}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  