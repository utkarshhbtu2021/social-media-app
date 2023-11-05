import { ADD_USER, LOGIN_USER, LOGOUT_USER, FOLLOW_USER } from "../actionTypes";

export const addUser = (username, mobileNumber, password) => {
  return {
    type: ADD_USER,
    payload: {
      username,
      mobileNumber,
      password,
    },
  };
};
export const editUserFollow = (id) => {
  return {
    type: FOLLOW_USER,
    payload: {
      id,
    },
  };
};

export const loginUser = (mobileNumber, password) => {
  return {
    type: LOGIN_USER,
    payload: {
      mobileNumber,
      password,
    },
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
