import certImage from '../assets/EDGE.jpg'; // example image
import awardImage from '../assets/RLMS.jpg'; // example image

export default function Achievements() {
  const awards = [
    {
      title: "Second Runner-Up, Intra Department Database Project Showcasing — 2023",
      description: "CSE, University of Chittagong",
      project: "Project Name: Research Lab Management System",
      image: awardImage, // Add image path
    },
  ];

  const certificates = [
    {
      title: "Full-Stack Web Development",
      description: "EDGE Project, Conducted by Department of Computer Science and Engineering (CSE), University of Chittagong",
      image: certImage, // Add image path
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Achievements</h1>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Awards Column */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-yellow-500 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Awards</h2>
          <ul className="space-y-4">
            {awards.map((award, idx) => (
              <li key={idx} className="p-4 bg-yellow-50 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-yellow-700">{award.title}</h3>
                <p className="text-gray-600 mb-3">{award.description}</p>
                <p className="text-gray-600 mb-3">{award.project}</p>
                {award.image && (
                  <img
                    src={award.image}
                    alt="Award"
                    className="rounded-lg shadow-md w-full object-cover"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Certificates Column */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-green-500 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Certificates</h2>
          <ul className="space-y-4">
            {certificates.map((cert, idx) => (
              <li key={idx} className="p-4 bg-green-50 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-green-700">{cert.title}</h3>
                <p className="text-gray-600 mb-3">{cert.description}</p>
                {cert.image && (
                  <img
                    src={cert.image}
                    alt="Certificate"
                    className="rounded-lg shadow-md w-full object-cover"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
