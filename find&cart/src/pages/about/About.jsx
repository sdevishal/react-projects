import { useEffect } from "react";
import { fetchUser } from "../../features/github-user-data/githubUserSlice";
import styles from "./About.module.css";
import { useDispatch, useSelector } from "react-redux";

const About = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading)
    return (
      <h1 style={{ textAlign: "center", marginBlock: "1rem" }}>Loading...</h1>
    );
  if (error)
    return (
      <h1 style={{ textAlign: "center", marginBlock: "1rem" }}>
        {error || "|| There is somethimmng wrong!"}
      </h1>
    );

  return (
    <div className={styles.githubProfile}>
      <div className={styles.profileHeader}>
        <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
        <h2>{user.name || user.login}</h2>
        <p>{user.bio}</p>
      </div>

      <div className={styles.profileStats}>
        <div className={styles.statCard}>
          <span>👥 Followers</span>
          <strong>{user.followers}</strong>
        </div>
        <div className={styles.statCard}>
          <span>🧑‍🤝‍🧑 Following</span>
          <strong>{user.following}</strong>
        </div>
        <div className={styles.statCard}>
          <span>📦 Repos</span>
          <strong>{user.public_repos}</strong>
        </div>
      </div>

      {user.blog && (
        <div className={styles.profileLink}>
          <a
            href={
              user.blog.startsWith("http") ? user.blog : `https://${user.blog}`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            🌐 Visit Website
          </a>
        </div>
      )}
    </div>
  );
};

export default About;
About;
