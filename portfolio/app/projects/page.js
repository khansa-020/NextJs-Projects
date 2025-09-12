export default function Projects() {
  const projects = [
    { name: "Portfolio Website", desc: "My first Next.js project." },
    { name: "Todo App", desc: "Simple task management app." },
  ];

  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl font-bold text-green-600 text-center">Projects</h1>
      <div className="grid gap-6 mt-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <div key={i} className="p-4 border rounded-xl shadow-md bg-white">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
