import profileImage from '../assets/hm.jpg';
import cv from '../assets/CV_Template.pdf';

export default function Home() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-8 md:px-16 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 animate-gradient-light opacity-50"></div>

      {/* Left Side: Text */}
      <div className="relative z-10 text-center md:text-left max-w-lg md:mr-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
          Hi, I'm <span className="text-blue-800">H.M Imtiaz Uddin</span>
        </h1>
        <h2 className="text-lg md:text-xl text-gray-600 mb-6">
          CSE Student | Aspiring Web & Mobile App Developer
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Motivated and detail-oriented Computer Science graduate with strengths in idea generation,
          teamwork, and project management. Passionate about applying technical knowledge in software
          and mobile application development while continuously learning and adapting to new technologies.
        </p>
        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"                        
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          View Resume
        </a>
      </div>

      {/* Right Side: Stylish Image */}
      <div className="relative z-10 mt-8 md:mt-0">
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Gradient Animation Styles */}
      <style>{`
        @keyframes gradient-light {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-light {
          background-size: 200% 200%;
          animation: gradient-light 12s ease infinite;
        }
      `}</style>
    </div>
  );
}
