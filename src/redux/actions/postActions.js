import { ADD_POST, EDIT_POST, INIT_POSTS } from "../actionTypes";

export const addPost = (content) => {
  console.log("checkinpost", content);
  return {
    type: ADD_POST,
    payload: {
      content,
    },
  };
};

export const editPost = (id, content) => {
  return {
    type: EDIT_POST,
    payload: {
      id,
      content,
    },
  };
};

export const initPosts = (posts) => {
  return {
    type: INIT_POSTS,
    payload: posts,
  };
};
