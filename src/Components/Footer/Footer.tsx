import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import facebook from "../../assets/social/facebook-white.svg";
import instagram from "../../assets/social/instagram-white.svg";
import twitter from "../../assets/social/twitter-white.svg";
import appstore from "../../assets/store/app-store.svg";
import playstore from "../../assets/store/play-store.svg";
import windowsstore from "../../assets/store/windows-store.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <section className={styles["footer__content"]}>
        <div className={styles["footer__nav"]}>
          <Link to="/">Home</Link>
          {` | `}
          <Link to="/">Terms and Conditions</Link>
          {` | `}
          <Link to="/">Privacy Policy</Link>
          {` | `}
          <Link to="/">Collection Statement</Link>
          {` | `}
          <Link to="/">Help</Link>
          {` | `}
          <Link to="/">Manage Account</Link>
        </div>
        <p>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
        <div className={styles["footer__social"]}>
          <div className={styles["footer__social__left"]}>
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>

          <div className={styles["footer__social__right"]}>
            <img src={appstore} alt="appstore" />
            <img src={playstore} alt="playstore" />
            <img src={windowsstore} alt="windowsstore" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
