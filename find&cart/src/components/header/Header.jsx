import NavBar from "../navbar/NavBar";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={style.container}>
        <i className="bi bi-rocket-takeoff-fill"></i>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
