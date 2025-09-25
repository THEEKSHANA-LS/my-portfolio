import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-400 py-3 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Social Media Icons (Consistent with Contact Page) */}
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://www.linkedin.com/in/sandun-theekshana-2a4b682b9/" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://github.com/THEEKSHANA-LS" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
        
        {/* Copyright */}
        <p className="text-sm">
          &copy; {currentYear} Sandun Theekshana. All rights reserved. | Built with React & Tailwind CSS.
        </p>

      </div>
    </footer>
  );
}