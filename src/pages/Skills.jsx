export default function Skills() {
  const skills = {
     Languages: ["C", "C++", "Python", "JavaScript", "PHP", "SQL"],
    "Frameworks & Libraries": [
      "React",
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "TensorFlow",
      "Tailwind CSS",
      "Bootstrap",
    ],
    Databases: ["MySQL", "PostgreSQL", "Firebase"],
    "Developer Tools & Platforms": [
      "Git",
      "GitHub",
      "VS Code",
      "Android Studio",
      "XAMPP",
      "Vercel",
    ],
    Concepts: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Explainable AI",
      "REST APIs",
      "GraphQL",
      "Software Engineering Principles",
      "Computer Vision",
    ],
    "Soft Skills": [
      "Leadership",
      "Teamwork",
      "Adaptability",
      "Communication",
      "Eager to Learn",
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Skills</h1>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items], index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-blue-500 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{category}</h2>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
