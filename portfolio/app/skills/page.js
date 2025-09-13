export default function Skills() {
  const skills = [
    { name: "HTML5", icon: "/skills/html5.svg" },
    { name: "CSS3", icon: "/skills/css3.svg" },
    { name: "JavaScript", icon: "/skills/javascript.svg" },
    { name: "Node.js", icon: "/skills/nodejs.svg" },
    { name: "React", icon: "/skills/react.svg" },
    { name: "Redux", icon: "/skills/redux.svg" },
    { name: "MongoDB", icon: "/skills/mongodb.svg" },
    { name: "MySQL", icon: "/skills/mysql.svg" },
    { name: "Material UI", icon: "/skills/mui.svg" },
    { name: "Git", icon: "/skills/git.svg" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Professional <span className="text-purple-500">Skillset</span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#111] p-6 flex items-center justify-center rounded-xl shadow-lg border border-gray-800 hover:scale-105 transform transition duration-300 hover:shadow-purple-500/50"
          >
            <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
          </div>
        ))}
      </div>
    </div>
  );
}
