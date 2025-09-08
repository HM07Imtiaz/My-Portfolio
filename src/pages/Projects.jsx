import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "Research Lab Management System — Team Project",
      github: "https://github.com/HM07Imtiaz/Research-Lab-Management-System",
      description:
        "A web-based platform to streamline research workflows. Features supervisor/researcher management, file sharing, meeting scheduling, and progress tracking for academic research teams.",
      tech: ["HTML", "CSS", "PHP", "MySQL", "XAMPP"]
    },
    {
      name: "My Portfolio — Individual Project",
      github: "https://github.com/HM07Imtiaz/My-Portfolio",
      description:
        "Personal portfolio website showcasing my skills, projects, and achievements. Built with React and TailwindCSS, deployed on Vercel.",
      tech: ["React", "TailwindCSS", "JavaScript"]
    },
    {
      name: "TuitionLinkHub (Mobile App) — Individual Project",
      github: "https://github.com/HM07Imtiaz/TuitionManagement",
      description:
        "A full-stack tuition management mobile app built for students, teachers, and guardians. Supports account creation, post management, comments, reactions, location search, and media storage. Integrated GraphQL, TensorFlow, and Google Maps for enhanced features.",
      tech: ["React Native", "Expo", "Firebase", "GraphQL", "TensorFlow.js", "GSAP"]
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Projects</h1>
      <div className="w-full max-w-3xl space-y-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                <FaGithub size={24} />
              </a>
            </div>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
