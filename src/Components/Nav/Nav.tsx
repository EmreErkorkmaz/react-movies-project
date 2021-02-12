import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
  
  useEffect(() => {
    
  }, [isAuthenticated]);

  const login = () => {
    dispatch({
      type: "LOGIN"
    });
  }
  const logout = () => {

    dispatch({
      type: "LOGOUT"
    });
  }


  return (
    <div className={styles.nav}>
      <Link to="/">
        <h1 className={styles["nav__header"]}>DEMO Streaming</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <button onClick={logout} className={`${styles.buttons} ${styles["btn-outlined"]} ${styles["danger"]}`}>
            Logout
          </button>
        ) : (
          <button onClick={login} className={`${styles.buttons} ${styles["btn-outlined"]}`}>
            Login
          </button>
        )}
        {!isAuthenticated && <button className={`${styles.buttons} ${styles["btn-dark"]}`}>
          Start your free trial
        </button>}
      </div>
    </div>
  );
};

export default Nav;
