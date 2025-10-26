import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_PUBLIC_KEY
    )
    
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          toast.error("Failed to send message, try again.");
          setLoading(false);
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-950 text-gray-300">
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
          <h3 className="text-xl font-bold text-center mb-6 text-gray-100">
            Send Me an Email 📧
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-gray-200 placeholder-gray-400 transition-all duration-300"
              required
            />
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-gray-200 placeholder-gray-400 transition-all duration-300"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-gray-200 placeholder-gray-400 transition-all duration-300"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-gray-200 placeholder-gray-400 resize-y transition-all duration-300"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-gray-900 text-white font-semibold py-3 rounded-lg shadow-lg hover:from-gray-700 hover:to-blue-700 transition-all duration-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
