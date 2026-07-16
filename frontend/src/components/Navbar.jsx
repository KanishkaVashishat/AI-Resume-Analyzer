import "../styles/Navbar.css";
import { FaRobot, FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaRobot className="logo-icon" />
        <span>AI Resume Analyzer</span>
      </div>

      <div className="nav-links">
        <a href="#about">About</a>

        <a
          href="https://github.com/KanishkaVashishat/AI-Resume-Analyzer"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
          GitHub
        </a>
      </div>
    </nav>
  );
}

export default Navbar;