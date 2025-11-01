import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
          <nav className={styles.links}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
