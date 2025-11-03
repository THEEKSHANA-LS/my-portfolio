import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  // ... (handleSubmit function remains the same)

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

      {/* Increased max-width slightly for desktop, improved mobile padding */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6"> 
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-3xl p-6 sm:p-12 shadow-2xl border border-gray-700"
        >
          <h3 className="text-xl font-bold text-center mb-8 text-gray-100">
            Send Me a Message 📬
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {[
              { type: "email", name: "from_email", placeholder: "Your Email" },
              { type: "text", name: "from_name", placeholder: "Your Name" },
              { type: "text", name: "subject", placeholder: "Subject" }
            ].map((inputProps) => (
              <input
                key={inputProps.name}
                type={inputProps.type}
                name={inputProps.name}
                placeholder={inputProps.placeholder}
                // Unified input styling with better focus/hover
                className="w-full p-4 rounded-xl bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none text-gray-200 placeholder-gray-400 transition-all duration-300 shadow-inner"
                required
              />
            ))}
            <textarea
              name="message"
              rows="6" // Increased rows for better writing space on desktop
              placeholder="Message"
              // Unified input styling with better focus/hover
              className="w-full p-4 rounded-xl bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none text-gray-200 placeholder-gray-400 resize-y transition-all duration-300 shadow-inner"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 rounded-xl shadow-xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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