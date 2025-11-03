import { useState } from 'react';
import { FaCode, FaBars, FaTimes } from "react-icons/fa"; // Added FaBars, FaTimes for the toggle

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="h-20 flex items-center bg-gray-900/80 backdrop-blur-sm text-gray-200 p-4 fixed top-0 w-full shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <a href="#" className="flex items-center text-2xl font-extrabold tracking-wide text-blue-400 hover:text-blue-300 transition-colors">
          <FaCode size={24} className="mr-2" /> Sandun Theekshana
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium tracking-wide">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-lg hover:text-blue-400 transition-colors duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-400 pb-1"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger & Close Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-200 p-2 focus:outline-none hover:text-blue-400 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu (Improved) */}
        <ul
          className={`absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md border-t-2 border-gray-700 md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.name} onClick={() => setIsOpen(false)} className="border-b border-gray-800 last:border-b-0">
              <a
                href={link.href}
                className="block text-lg py-4 px-4 hover:bg-gray-800 hover:text-blue-400 transition-colors duration-300 ease-in-out"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}