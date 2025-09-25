import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-950 text-gray-300">
      {/* Separated Title */}
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
        Contact Me
      </h2>
      
      <div className="max-w-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-700"
        >
          {/* Form Card Content */}
          <h3 className="text-xl font-bold text-center mb-6 text-gray-100">
            Send Me an Email 📧
          </h3>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-gray-200 placeholder-gray-400 transition-all duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-gray-200 placeholder-gray-400 transition-all duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-gray-200 placeholder-gray-400 transition-all duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Message"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-gray-200 placeholder-gray-400 resize-y transition-all duration-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-gray-900 text-white font-semibold py-3 rounded-lg shadow-lg hover:from-gray-700 hover:to-blue-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}