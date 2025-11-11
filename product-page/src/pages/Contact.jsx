const inputClasses = 'w-full border border-gray-300 py-1 px-2 dark:border-gray-600 bg-white dark:bg-[#27272A] text-gray-800 dark:text-gray-100 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none'

export default function Contact() {
  return (
    <section className=" bg-color flex flex-col items-center justify-center min-h-screen px-6">
      <div className="card w-full max-w-sm px-6 py-10">
        <h2 className=" mb-6 text-center">Contact Us</h2>

        <form className="space-y-4">
          {/* Name */}
          <div>
            <label>Name</label>
            <input type="text" className={inputClasses} placeholder="Your name" />
          </div>

          {/* Email */}
          <div>
            <label>Email</label>
            <input
              type="email"
              className={inputClasses}
              placeholder="your@email.com"
            />
          </div>

          {/* Message */}
          <div>
            <label>Message</label>
            <textarea
              rows="4"
              className={inputClasses}
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
