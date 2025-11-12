import { useGetGithubUserQuery } from "../api/githubUserApi";

const About = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetGithubUserQuery();

  // 🌀 Loading State
  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3"></div>
        <p className="text-gray-700 dark:text-gray-300 text-base font-medium">
          Loading products...
        </p>
      </div>
    );

  // ⚠️ Error State
  if (isError)
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <p className="text-red-500 text-base font-medium">
          {error?.error || "Oops! Something went wrong."}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-3 px-4 py-1.5 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-300 cursor-pointer"
        >
          Retry
        </button>
      </div>
    );

  return (
    <section className="bg-color flex flex-col items-center justify-center min-h-screen p-6">
      {isSuccess && (
        <div
          className="max-w-xs mx-auto p-6
                 bg-white dark:bg-gray-600 
                 rounded-2xl shadow-md text-center font-inter 
                 transition-all duration-200 hover:translate-y-0 hover:shadow-2xl"
        >
          {/* ---------- PROFILE HEADER ---------- */}
          <div className="flex flex-col items-center">
            <img
              src={data.avatar_url}
              alt={`${data.login}'s avatar`}
              className="w-28 h-28 rounded-full border-4 border-[#0366d6] object-cover mb-3"
            />
            <h2 className="text-2xl font-semibold text-gray-900 mt-2 mb-1">
              {data.name || data.login}
            </h2>
            <p className="text-gray-600 text-sm">{data.bio}</p>
          </div>

          {/* ---------- PROFILE STATS ---------- */}
          <div className="flex justify-around gap-3 my-6">
            <div className="  bg-gray-50 flex-1 px-4 py-3 rounded-lg shadow-inner transition-colors duration-300 hover:bg-[#e8f0fe]">
              <span className="block text-gray-500 text-sm">👥 Followers</span>
              <strong className="text-lg text-gray-900">
                {data.followers}
              </strong>
            </div>

            <div className="bg-gray-50 flex-1 px-4 py-3 rounded-lg shadow-inner transition-colors duration-300 hover:bg-[#e8f0fe]">
              <span className="block text-gray-500 text-sm">🧑‍🤝‍🧑 Following</span>
              <strong className="text-lg text-gray-900">
                {data.following}
              </strong>
            </div>

            <div className="bg-gray-50 flex-1 px-4 py-3 rounded-lg shadow-inner transition-colors duration-300 hover:bg-[#e8f0fe]">
              <span className="block text-gray-500 text-sm">📦 Repos</span>
              <strong className="text-lg text-gray-900">
                {data.public_repos}
              </strong>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
