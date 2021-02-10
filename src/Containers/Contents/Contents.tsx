import React, { useEffect, useState } from "react";
import styles from "./Content.module.scss";
import CardItem from "../../Components/CardItem/CardItem";
import { useDispatch, useSelector } from "react-redux";

const Movies = (props: any) => {
  const { match, history } = props;
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("year-asc");
  const [contents, setContents] = useState([]);
  const [contentType] = useState(match.params.type);
  const [isLoading, setIsLoading] = useState(false);

  const movies = useSelector((state: any) => state.contents.movies);
  const series = useSelector((state: any) => state.contents.series);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    if (contentType === "movie") {
      setContents(movies);
    } else if (contentType === "series") {
      setContents(series);
    } else {
      history.push("/");
    }
    const timer = setTimeout(() => {
      setSearchValue(' ');
      setIsLoading(false);
    }, 500)

    return () => {
      clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (searchValue.length > 1) {
      const array = [...contents];
      const filteredArray = array.filter((content: any) =>
        content.title.toLowerCase().includes(searchValue.toLowerCase().trim())
      );
      setContents(filteredArray);
    } else {
      let array: any;
      if (contentType === "movie") {
        array = [...movies];
      } else {
        array = [...series];
      }
      setContents(array);
    }
  }, [searchValue]);

  useEffect(() => {
    switch (sortValue) {
      case "title-asc":
        const array: any = [...contents].sort((a: any, b: any) =>
          a.title.localeCompare(b.title)
        );
        setContents(array);
        break;
      case "title-desc":
        const array2: any = [...contents]
          .sort((a: any, b: any) => a.title.localeCompare(b.title))
          .reverse();
        setContents(array2);
        break;
      case "year-asc":
        const array3: any = [...contents].sort(
          (a: any, b: any) => a.releaseYear - b.releaseYear
        );
        setContents(array3);
        break;
      case "year-desc":
        const array4: any = [...contents]
          .sort((a: any, b: any) => a.releaseYear - b.releaseYear)
          .reverse();
        setContents(array4);
        break;

      default:
        break;
    }
  }, [sortValue])

  
  return (
    <>
      <div className={styles["filter-section"]}>
        <div className={styles["search-input"]}>
          <input
            placeholder="Search..."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button className={styles.icon}>
            <i className="fa fa-search" style={{ color: "white" }}></i>
          </button>
        </div>
        <select value={sortValue} onChange={(event) => setSortValue(event.target.value)}>
          <option value="year-asc">Year Ascending</option>
          <option value="year-desc">Year Descending</option>
          <option value="title-asc">Title Ascending</option>
          <option value="title-desc">Title Descending</option>
        </select>
      </div>
      <div className={styles.container}>
        {isLoading
          ? "Loading..."
          : contents.map((content: any, index: number):
              | JSX.Element
              | undefined
              | null => {
              if (index < 21) {
                return (
                  <CardItem
                    key={content.title}
                    title={content.title}
                    image={content.images["Poster Art"].url}
                  />
                );
              } else {
                return null;
              }
            })}
      </div>
    </>
  );
};

export default Movies;
