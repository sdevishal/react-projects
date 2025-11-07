
export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      date: "November 3, 2025",
      excerpt:
        "Learn the basics of building user interfaces with React — from components and props to hooks and state management.",
      image:
        "https://images.unsplash.com/photo-1581276879432-15a19d654956?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Understanding Tailwind CSS",
      date: "October 28, 2025",
      excerpt:
        "Discover how utility-first styling with Tailwind CSS can speed up your front-end workflow and make your UI consistent.",
      image:
        "https://images.unsplash.com/photo-1608115392559-0f33f37b4216?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Why Learning JavaScript Fundamentals Matters",
      date: "October 15, 2025",
      excerpt:
        "Before diving into frameworks, mastering core JavaScript will make you a stronger and more confident developer.",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          Latest Blog Posts
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <button className="text-blue-500 font-medium hover:underline">
                  Read more →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
