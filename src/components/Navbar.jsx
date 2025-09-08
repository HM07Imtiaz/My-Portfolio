import { Menu } from 'lucide-react';

export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white p-4 shadow-md">
      <div className="text-xl font-bold">H.M Imtiaz Uddin</div>
      <button onClick={toggleSidebar} className="text-white">
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  );
}
