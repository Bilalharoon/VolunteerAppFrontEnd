import Axios from "axios";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const refreshTokenLoginAsync = payload => {
  return async dispatch => {
    try {
      if(localStorage.getItem("refresh_token")){
        const response = await Axios.post("/user/login", {
          RefreshToken: localStorage.getItem("refresh_token")
        });
        console.log(response)
        
        dispatch({
          type: LOGIN,
          payload:{
            username: response.data.Username,
            role: response.data.Role,
            UserId: response.data.Id,
            token: response.data.Token
          }
        })
      }
      else {
        console.log("no refresh token")
      }
    }
    catch(err){
      console.log("refresh token invalid")
    }
  }
}
export const loginAsync = payload => {
  return async dispatch => {
    try {
      const response = await Axios.post("/user/login", {
        username: payload.username,
        password: payload.password
      });
      const token = response.data.token;
      localStorage.setItem("refresh_token", response.data.RefreshToken)
      dispatch({
        type: LOGIN,
        payload: {
          username: response.data.Username,
          UserId: response.data.Id,
          role: response.data.Role,
          token: response.data.Token
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
    localStorage.setItem("refresh_token", response.data.RefreshToken)
    dispatch({
      type: LOGIN,
      payload: {
        username: response.data.username,
        UserId: response.data.UserId,
        role: response.data.role,
        token: response.data.Token
      }
    });
  };
};
