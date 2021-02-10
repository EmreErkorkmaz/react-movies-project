import React from "react";
import CardItem from "../../Components/CardItem/CardItem";
import placeholder from "../../assets/placeholder.png";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

const Home = (props: any) => {
  return (
    <>
      <div className={styles.header}>
          <h2>Popular Titles</h2>
      </div>
      <div className={styles.container}>
        <Link to={"/series"}>
          <CardItem title="Popular Series" image={placeholder} />
        </Link>
        <Link to={"/movie"}>
          <CardItem title="Popular Movies" image={placeholder} />
        </Link>
      </div>
    </>
  );
};

export default Home;
