// import { useEffect } from "react";
// import { fetchUser } from "../../features/githubUserSlice";
// import styles from "./About.module.css";
// import { useDispatch, useSelector } from "react-redux";

// const About = () => {
//   const dispatch = useDispatch();
//   const { user, loading, error } = useSelector((state) => state.user);

//   useEffect(() => {
//     dispatch(fetchUser());
//   }, [dispatch]);

//   if (loading)
//     return (
//       <h1 style={{ textAlign: "center", marginBlock: "1rem" }}>Loading...</h1>
//     );
//   if (error)
//     return (
//       <h1 style={{ textAlign: "center", marginBlock: "1rem" }}>
//         {error || "|| There is somethimmng wrong!"}
//       </h1>
//     );

//   return (
//     <div className={styles.githubProfile}>
//       <div className={styles.profileHeader}>
//         <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
//         <h2>{user.name || user.login}</h2>
//         <p>{user.bio}</p>
//       </div>

//       <div className={styles.profileStats}>
//         <div className={styles.statCard}>
//           <span>👥 Followers</span>
//           <strong>{user.followers}</strong>
//         </div>
//         <div className={styles.statCard}>
//           <span>🧑‍🤝‍🧑 Following</span>
//           <strong>{user.following}</strong>
//         </div>
//         <div className={styles.statCard}>
//           <span>📦 Repos</span>
//           <strong>{user.public_repos}</strong>
//         </div>
//       </div>

//       {user.blog && (
//         <div className={styles.profileLink}>
//           <a
//             href={
//               user.blog.startsWith("http") ? user.blog : `https://${user.blog}`
//             }
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             🌐 Visit Website
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default About;
// About;

import { useEffect } from "react";
import { fetchUser } from "../features/githubUserSlice";
import { useDispatch, useSelector } from "react-redux";

const About = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading)
    return <h1 className="text-center my-4 text-lg font-medium">Loading...</h1>;

  if (error)
    return (
      <h1 className="text-center my-4 text-lg font-medium text-red-500">
        {error || "There is something wrong!"}
      </h1>
    );

  return (
    // 🔹 Converted .githubProfile into Tailwind classes
    <section className="bg-color flex flex-col items-center justify-center min-h-screen px-6">
      <div
        className="max-w-xs mx-auto p-6 
                 bg-white dark:bg-gray-600 
                 rounded-2xl shadow-md text-center font-inter 
                 transition-all duration-200 hover:translate-y-0 hover:shadow-2xl"
      >
        {/* ---------- PROFILE HEADER ---------- */}
        <div className="flex flex-col items-center">
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            className="w-28 h-28 rounded-full border-4 border-[#0366d6] object-cover mb-3"
          />
          <h2 className="text-2xl font-semibold text-gray-900 mt-2 mb-1">
            {user.name || user.login}
          </h2>
          <p className="text-gray-600 text-sm">{user.bio}</p>
        </div>

        {/* ---------- PROFILE STATS ---------- */}
        <div className="flex justify-around gap-3 my-6">
          {/* 🔹 Converted .statCard styles */}
          <div className="  bg-gray-50 flex-1 px-4 py-3 rounded-lg shadow-inner transition-colors duration-300 hover:bg-[#e8f0fe]">
            <span className="block text-gray-500 text-sm">👥 Followers</span>
            <strong className="text-lg text-gray-900">{user.followers}</strong>
          </div>

          <div className="bg-gray-50 flex-1 px-4 py-3 rounded-lg shadow-inner transition-colors duration-300 hover:bg-[#e8f0fe]">
            <span className="block text-gray-500 text-sm">🧑‍🤝‍🧑 Following</span>
            <strong className="text-lg text-gray-900">{user.following}</strong>
          </div>

          <div className="bg-gray-50 flex-1 px-4 py-3 rounded-lg shadow-inner transition-colors duration-300 hover:bg-[#e8f0fe]">
            <span className="block text-gray-500 text-sm">📦 Repos</span>
            <strong className="text-lg text-gray-900">
              {user.public_repos}
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
