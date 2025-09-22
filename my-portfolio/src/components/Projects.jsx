export default function Projects() {
    const projects = [
      { title: "InternLink App", desc: "Internship job finder built with MERN + Flutter", link: "#" },
      { title: "Automatic Close House System", desc: "IoT-based humidity control system", link: "#" },
      { title: "Task Tracker App", desc: "React + JS task management app", link: "#" },
    ];
  
    return (
      <section id="projects" className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 px-6">
          {projects.map((p, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600 mb-4">{p.desc}</p>
              <a href={p.link} className="text-blue-600 hover:underline">View Project →</a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  