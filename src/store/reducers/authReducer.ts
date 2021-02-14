import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false
};

const authReducer = (state = initialState, action: any) => {
  const { type } = action;
  switch (type) {
    case actionTypes.LOGIN:
        return {...state, isAuthenticated: true}
    case actionTypes.LOGOUT:
        return {...state, isAuthenticated: false}
    default:
      return state;
  }
};

export default authReducer;
