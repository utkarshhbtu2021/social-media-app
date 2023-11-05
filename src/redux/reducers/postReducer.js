import { ADD_POST, EDIT_POST, INIT_POSTS } from "../actionTypes";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.posts.length + 1,
        content: action.payload.content,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case EDIT_POST:
      const editedPosts = state.posts.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            content: action.payload.content,
          };
        }
        return post;
      });
      return {
        ...state,
        posts: editedPosts,
      };
    case INIT_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
