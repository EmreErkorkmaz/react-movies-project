import * as actionTypes from "../actions/actionTypes";
import contents from "../../feed/sample";
import { selectType, sortContents } from "../actions/contents";

const initialState = {
  contents: contents.entries
};

const contentsReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CONTENT_TYPE:
      return selectType(initialState, payload);

    case actionTypes.SORT_CONTENTS:
      return sortContents(state, payload);

    default:
      return initialState;
  }
};

export default contentsReducer;
