// --- CONTACT SECTION ---
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-950 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">Contact Me</h2>
      <p className="mb-4 text-gray-300">Let’s connect! Reach out via:</p>
      <div className="flex justify-center gap-6">
        <a
          href="mailto:sandun@example.com"
          className="text-blue-400 hover:text-blue-500 hover:underline transition-colors duration-300"
        >
          Email
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="text-blue-400 hover:text-blue-500 hover:underline transition-colors duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com"
          target="_blank"
          className="text-blue-400 hover:text-blue-500 hover:underline transition-colors duration-300"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}