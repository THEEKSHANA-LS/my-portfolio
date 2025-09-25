import { useState } from 'react';
import { FaCode } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Updated links to match your new combined sections
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="h-20 flex items-center bg-gray-900/60 backdrop-blur-md text-gray-200 p-4 fixed top-0 w-full shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <div className="flex text-2xl gap-[20px] font-bold tracking-wide text-blue-400">
          <FaCode size={30} className=""/> Sandun Theekshana
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 font-semibold tracking-wide">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-[20px] hover:text-blue-400 transition-colors duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-400 pb-1"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-200 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4 space-y-2 text-center`}>
        {navLinks.map((link) => (
          <li key={link.name} onClick={() => setIsOpen(false)}>
            <a 
              href={link.href} 
              className="block hover:text-blue-400 transition-colors duration-300 ease-in-out py-2"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

