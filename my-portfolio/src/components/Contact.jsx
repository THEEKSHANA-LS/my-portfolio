export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-4 text-gray-600">Let’s connect! Reach out via:</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:sandun@example.com" className="text-blue-600 hover:underline">Email</a>
          <a href="https://linkedin.com" target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>
          <a href="https://github.com" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
        </div>
      </section>
    );
  }
  