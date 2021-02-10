import contents from "../../feed/sample";

const initialState = contents;

const contentsReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
      case "CONTENT_TYPE":
        const array: any = [...initialState.entries];
        const temp = array.filter((content: any) => content.programType === payload.programType);
        return {...state, entries: [...temp]}

    default:
      return initialState;
  }
};

export default contentsReducer;
