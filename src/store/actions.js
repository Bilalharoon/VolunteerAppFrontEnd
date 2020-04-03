import Axios from "axios";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const loginAsync = payload => {
  return async dispatch => {
    try {
      const response = await Axios.post("/user/login", {
        username: payload.username,
        password: payload.password
      });
      const token = response.data.token;
      localStorage.setItem("access_token", token);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("UserId", response.data.id.toString());
      localStorage.setItem("role", response.data.role);
      dispatch({
        type: LOGIN,
        payload: {
          username: response.data.username,
          UserId: response.data.id,
          role: response.data.role
        }
      });
      return true;
    } catch (error) {
      alert("username or password is incorrect");
      return false;
    }
  };
};

export const signupAsync = payload => {
  return async dispatch => {
    const response = await Axios.post("/user/register", {
      username: payload.username,
      password: payload.password,
      role: payload.role
    });
    const token = response.data.token;
    localStorage.setItem("access_token", token);
    localStorage.setItem("username", response.data.username);
    localStorage.setItem("UserId", response.data.id.toString());
    localStorage.setItem("role", response.data.role);
    dispatch({
      type: LOGIN,
      payload: {
        username: response.data.username,
        UserId: response.data.UserId,
        role: response.data.role
      }
    });
  };
};
