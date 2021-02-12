import contents from "../../feed/sample";

const initialState = {
  contents: contents.entries,
  contentType: "",
  movies: contents.entries.filter((content) => content.programType === "movie"),
  series: contents.entries.filter(
    (content) => content.programType === "series"
  ),
};

const contentsReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "CONTENT_TYPE":
      const array = initialState.contents.filter(
        (content) => content.programType === payload.contentType
      );
      return { ...state, contents: [...array] };

    case "SORT_CONTENTS":
      switch (payload.sortValue) {
        case "title-asc":
          const array: any = [...state.contents];
          array.sort((a: any, b: any) => a.title.localeCompare(b.title));

          return { ...state, contents: [...array] };
        case "title-desc":
          const array2: any = [...state.contents];
          array2
            .sort((a: any, b: any) => a.title.localeCompare(b.title))
            .reverse();
          return { ...state, contents: [...array2] };

        case "year-asc":
          const array3: any = [...state.contents];
          array3.sort((a: any, b: any) => a.releaseYear - b.releaseYear);
          return { ...state, contents: [...array3] };

        case "year-desc":
          const array4: any = [...state.contents];
          array4
            .sort((a: any, b: any) => a.releaseYear - b.releaseYear)
            .reverse();

          return { ...state, contents: [...array4] };

        default:
          return state;
      }

    default:
      return initialState;
  }
};

export default contentsReducer;
