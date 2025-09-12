export default function Contact() {
  return (
    <div className="max-w-lg mx-auto p-10">
      <h1 className="text-3xl font-bold text-purple-600 text-center">Contact Me</h1>
      <form className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border rounded"
          rows="4"
        />
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Send
        </button>
      </form>
    </div>
  );
}
