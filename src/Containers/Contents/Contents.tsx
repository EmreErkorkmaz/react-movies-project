import React, { useEffect, useState } from "react";
import styles from "./Content.module.scss";
import CardItem from "../../Components/CardItem/CardItem";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from '../../store/actions/actionTypes';

const Movies = (props: any) => {
  const { match, history } = props;
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [contents, setContents] = useState([]);
  const [contentType] = useState(match.params.type);
  const [isLoading, setIsLoading] = useState(false);
  const [disableOption, setDisableOption] = useState(false);

  const dispatch = useDispatch();

  const allContents = useSelector((state: any) => state.contents.contents);

  useEffect(() => {
    setIsLoading(true);
    if (contentType === "movie" || contentType === "series") {
        dispatch({
            type: actionTypes.CONTENT_TYPE,
            payload : {
                contentType: contentType
            }
        });
      setContents(allContents);
    }  else {
      history.push("/");
    }
    const timer = setTimeout(() => {
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
      setContents(allContents);
    }
  }, [searchValue, allContents]);

  useEffect(() => {
    setDisableOption(true);
    dispatch({
      type: actionTypes.SORT_CONTENTS,
      payload: {
        sortValue: sortValue
      }
    })
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
          <option value="" disabled={disableOption}>Order By</option>
          <option value="year-asc">Year Ascending</option>
          <option value="year-desc">Year Descending</option>
          <option value="title-asc">Title Ascending</option>
          <option value="title-desc">Title Descending</option>
        </select>
      </div>
      <div className={styles.container}>
        {isLoading
          ? "Loading..."
          : (contents.length > 0 && contents.map((content: any, index: number):
              | JSX.Element
              | undefined
              | null => {
              if (index < 21) {
                return (
                  <CardItem
                    key={content?.title}
                    title={content?.title}
                    image={content?.images["Poster Art"].url}
                  />
                );
              } else {
                return null;
              }
            }))}
      </div>
    </>
  );
};

export default Movies;
