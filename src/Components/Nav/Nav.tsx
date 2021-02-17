import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import * as actionTypes from "../../store/actions/actionTypes";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  useEffect(() => {}, [isAuthenticated]);

  const login = () => {
    dispatch({
      type: actionTypes.LOGIN,
    });
  };
  const logout = () => {
    dispatch({
      type: actionTypes.LOGOUT,
    });
  };

  // {isAuthenticated ? (
  //   <button onClick={logout} className={`${styles.buttons} ${styles["btn-outlined"]} ${styles["danger"]}`}>
  //     Logout
  //   </button>
  // ) : (
  //   <button onClick={login} className={`${styles.buttons} ${styles["btn-outlined"]}`}>
  //     Login
  //   </button>
  // )}
  // {!isAuthenticated && <button className={`${styles.buttons} ${styles["btn-dark"]}`}>
  //   Start your free trial
  // </button>}

  return (
    <div className={styles.nav}>
      <Link to="/">
        <h1 className={styles["nav__header"]}>DEMO Streaming</h1>
      </Link>
      <div className={styles.menu} onClick={() => {setIsOpen(!isOpen)}}>
        <span className={`${styles["menu__burger"]} ${isOpen ? styles.open : null}`} />
      </div>
      <section className={`${styles['menu__list']} ${isOpen ? styles['show__nav'] : styles['close__nav']}`}>
        <ul>
          <li>
            {isAuthenticated ? (
              <button
                onClick={logout}
                className={`${styles.buttons} ${styles["btn-outlined"]} ${styles["danger"]}`}
              >
                Logout
              </button>
            ) : (
              <button
                onClick={login}
                className={`${styles.buttons} ${styles["btn-outlined"]}`}
              >
                Login
              </button>
            )}
          </li>
          <li>
            {!isAuthenticated && (
              <button className={`${styles.buttons} ${styles["btn-dark"]}`}>
                Start your free trial
              </button>
            )}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Nav;
