export default function Education() {
  const educationData = [
    {
      institution: "University of Chittagong",
      degree: "B.Sc. Engineering, Department of Computer Science and Engineering",
      details: "CGPA: 3.65",
      year: "2025",
    },
    {
      institution: "Bangladesh Nou-Bahini College, Chattogram",
      degree: "HSC (Science)",
      details: "GPA: 5.00",
      year: "2019",
    },
    {
      institution: "Al-Zaber Institute, Chattogram",
      degree: "SSC (Science)",
      details: "GPA: 5.00",
      year: "2017",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Education</h1>
      <div className="w-full max-w-3xl space-y-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-gray-800">{edu.institution}</h2>
              <span className="text-sm text-gray-500 font-medium">{edu.year}</span>
            </div>
            <p className="text-gray-700 font-medium">{edu.degree}</p>
            <p className="text-gray-600 mt-1">{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
