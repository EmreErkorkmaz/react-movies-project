export const selectType = (state: any, payload: any) => {
    const array = state.contents.filter(
        (content: any) => content.programType === payload.contentType
      );
      return { ...state, contents: [...array] };
}

export const sortContents = (state: any, payload: any) => {
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
}