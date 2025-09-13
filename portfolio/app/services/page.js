export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Building responsive and fast websites using Next.js, React, and Tailwind CSS.",
    },
    {
      title: "Backend Development",
      desc: "Developing APIs and server-side apps using Node.js, Express, and databases.",
    },
    {
      title: "Database Management",
      desc: "Designing and managing SQL & NoSQL databases like MySQL and MongoDB.",
    },
    {
      title: "UI/UX Design",
      desc: "Creating clean, modern, and user-friendly interfaces with Material UI.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        My <span className="text-blue-600">Services</span>
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-md border hover:shadow-lg hover:scale-105 transform transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800">{service.title}</h2>
            <p className="mt-3 text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
