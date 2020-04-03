import * as actionTypes from "../actions";

const userInitialState = {
  username: localStorage.getItem("username"),
  userId: parseInt(localStorage.getItem("UserId")),
  role: localStorage.getItem("role")
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        username: action.payload.username,
        userId: action.payload.userId,
        role: action.payload.role
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        username: null,
        password: null,
        role: null
      };
    default:
      return state;
  }
};

export default userReducer;
