// --- PROJECTS SECTION ---
export default function Projects() {
  const projects = [
    {
      title: "InternLink App",
      desc: "Internship job finder built with MERN + Flutter",
      link: "#",
    },
    {
      title: "Automatic Close House System",
      desc: "IoT-based humidity control system",
      link: "#",
    },
    {
      title: "Task Tracker App",
      desc: "React + JS task management app",
      link: "#",
    },
  ];
  return (
    <section id="projects" className="py-20 bg-gray-950 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {projects.map((p, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-100">
              {p.title}
            </h3>
            <p className="text-gray-400 mb-4">{p.desc}</p>
            <a
              href={p.link}
              className="text-blue-400 hover:text-blue-500 hover:underline transition-colors duration-300"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}