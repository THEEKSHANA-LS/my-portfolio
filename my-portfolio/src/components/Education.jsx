export default function Education() {
    const education = [
      {
        degree: "B (Hons) in Information and Communication Technology",
        school: "University of Sri Jayewardenepura",
        year: "2022 – Present",
        desc: "Focusing on Web Development and Software Engineering."
      },
      {
        degree: "G.C.E Advanced Level (Technology Stream)",
        school: "Embilipitiya President's College",
        year: "2019 – 2021",
        desc: "Completed studies in Engineering Technology and ICT."
      },
      {
        degree: "G.C.E Ordinary Level",
        school: "Embilipitiya President's College",
        year: "2018",
        desc: "Achieved excellent results with a 3A's 3B's and 3C's."
      },
    ];
  
    return (
      <section id="education" className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full border-l-4 border-blue-600"></div>
  
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="w-6 h-6 bg-blue-600 rounded-full absolute left-1/2 -translate-x-1/2 mt-2"></div>
  
                {/* Content Box */}
                <div className="w-1/2 px-6">
                  <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-gray-700">{edu.school}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                    <p className="mt-2 text-gray-600">{edu.desc}</p>
                  </div>
                </div>
  
                {/* Spacer */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  