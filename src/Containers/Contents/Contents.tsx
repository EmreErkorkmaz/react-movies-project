import React, { useEffect, useState } from "react";
import styles from "./Content.module.scss";
import CardItem from "../../Components/CardItem/CardItem";
import { useDispatch, useSelector } from "react-redux";

const Movies = (props: any) => {
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("year-asc");
  const { history, match } = props;
  const [contents, setContents] = useState([]);
  const [contentType, setContentType] = useState(match.params.type);
  const [error, setError] = useState("");

  const state = useSelector((state: any) => state.contents.entries);
  const dispatch = useDispatch();

  useEffect(() => {
    settingContent();
  }, []);

  const settingContent = () => {
    dispatch({
      type: "CONTENT_TYPE",
      payload: {
        programType: contentType
      }
    });
    console.log(contentType);

    setContents(state);
    console.log(contents);

  }

  const searchHandler = (event: any) => {
    setSearchValue(event.target.value);
    if(searchValue.length > 1){

      const filteredArray = contents.filter((content: any) => content.title.toLowerCase().includes(searchValue.toLowerCase()));
      setContents(filteredArray);
      console.log(filteredArray)
    }
    else {
      setContents(state);
    }
  };


  return (
    <>
      <div className={styles["filter-section"]}>
        <div className={styles['search-input']}>
          <input
            placeholder="Search..."
            value={searchValue}
            onChange={searchHandler}
          />
          <button className={styles.icon}>
            <i className="fa fa-search" style={{ color: "white" }}></i>
          </button>
        </div>
        <select
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
        >
          <option value="year-asc">Year Ascending</option>
          <option value="year-desc">Year Descending</option>
          <option value="title-asc">Title Ascending</option>
          <option value="title-desc">Title Descending</option>
        </select>
      </div>
      <div className={styles.container}>
        {contents ? (
          contents.map((content: any, index: number):
            | JSX.Element
            | undefined => {
            if (index < 21) {
              return (
                <CardItem
                  key={content.title}
                  title={content.title}
                  image={content.images["Poster Art"].url}
                />
              );
            }
          })
        ) : (
          <h2>{error}</h2>
        )}
      </div>
    </>
  );
};

export default Movies;
