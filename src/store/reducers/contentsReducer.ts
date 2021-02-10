import contents from "../../feed/sample";

const initialState = {
  contentType: "",
  movies: contents.entries.filter((content) => content.programType === "movie"),
  series: contents.entries.filter(
    (content) => content.programType === "series"
  ),
};

const contentsReducer = (state = initialState, action: any) => {
  const {
    type,
    // payload
  } = action;
  switch (type) {
    // case "CONTENT_TYPE":
    //   return { ...state, contentType: payload.contentType };

    // case "SEARCH_CONTENT":
    //   if (payload.searchValue > 1) {
    //     const searchArray = [...state.contents.entries].filter((content) =>
    //       content.title
    //         .toLowerCase()
    //         .includes(payload.searchValue.toLowerCase())
    //     );
    //     if (payload.contentType === "movie") {
    //       return {
    //         ...state,
    //         movies: { entries: [...searchArray], total: searchArray.length },
    //       };
    //     } else {
    //       return {
    //         ...state,
    //         series: { entries: [...searchArray], total: searchArray.length },
    //       };
    //     }
    //   } else {
    //     return { ...initialState };
    //   }
    default:
      return initialState;
  }
};

export default contentsReducer;
