export default function Resume() {
    return (
      <section id="resume" className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-6">
          Here is my latest resume. You can view it online or download a copy.
        </p>
        
        <div className="flex justify-center gap-6">
          {/* View Resume Button */}
          <a 
            href="/resume.pdf"  // 👈 Place resume.pdf inside "public" folder
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            View Resume
          </a>
  
          {/* Download Resume Button */}
          <a 
            href="/resume.pdf" 
            download 
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            Download Resume
          </a>
        </div>
      </section>
    );
  }
  