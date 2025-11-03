import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Used a darker gray for the footer background to stand out slightly from the main body
    <footer className="bg-gray-800 text-gray-400 py-6 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Social Media Icons (Increased size for tap targets) */}
        <div className="flex justify-center gap-8 mb-6">
          <a href="https://www.linkedin.com/in/sandun-theekshana-2a4b682b9/" target="_blank" rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn Profile">
            {/* Increased size from 'lg' to 'xl' */}
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
          <a href="https://github.com/THEEKSHANA-LS" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub Profile">
            {/* Increased size from 'lg' to 'xl' */}
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        </div>
        
        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {currentYear} Sandun Theekshana. All rights reserved. 
        </p>
        <p className="text-xs mt-1 text-gray-600">
            Built with React & <span className="text-blue-400 font-semibold">Tailwind CSS</span>.
        </p>

      </div>
    </footer>
  );
}