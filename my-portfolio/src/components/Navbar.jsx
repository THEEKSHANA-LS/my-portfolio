export default function Navbar() {
    return (
      <nav className="bg-gray-900 text-white p-4 fixed top-0 w-full shadow-md z-10">
        <ul className="flex justify-center gap-6">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#education" className="hover:text-blue-400">Education</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#resume" className="hover:text-blue-400">Resume</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
    );
  }
  