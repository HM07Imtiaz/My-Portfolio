import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
      <button className="p-4" onClick={toggleSidebar}>
        <X className="w-6 h-6" />
      </button>
      <ul className="p-4 space-y-4">
        <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
        <li><Link to="/Projects" onClick={toggleSidebar}>Projects</Link></li>
        <li><Link to="/education" onClick={toggleSidebar}>Education</Link></li>
        <li><Link to="/skills" onClick={toggleSidebar}>Skills</Link></li>
        <li><Link to="/achievements" onClick={toggleSidebar}>Achievements</Link></li>
        <li><Link to="/publications" onClick={toggleSidebar}>Research</Link></li>
      </ul>
    </div>
  );
}
