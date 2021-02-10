const initialState = {
  isAuthenticated: false
};

const authReducer = (state = initialState, action: any) => {
  const { type } = action;
  switch (type) {
    case "LOGIN":
        return {...state, isAuthenticated: true}
    case "LOGOUT":
        return {...state, isAuthenticated: false}
    default:
      return state;
  }
};

export default authReducer;
