import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-6 mt-auto">
      <div className="flex flex-col items-center space-y-3">
        {/* Contact Info */}
        <p className="text">
          Contact: <a href="mailto:hmimtiaz2@gmail.com" className="underline">hmimtiaz2@gmail.com</a>  |  
          Address: North Agrabad, Chittagong.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/HM07Imtiaz?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/h-m-imtiaz-uddin-422257287/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}
