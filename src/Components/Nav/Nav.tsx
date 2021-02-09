import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link to="/">
        <h1 className={styles["nav__header"]}>DEMO Streaming</h1>
      </Link>
      <div>
        <button className={`${styles.buttons} ${styles["btn-outlined"]}`}>
          Login
        </button>
        <button className={`${styles.buttons} ${styles["btn-dark"]}`}>
          Start your free trial
        </button>
      </div>
    </div>
  );
};

export default Nav;
