
export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
