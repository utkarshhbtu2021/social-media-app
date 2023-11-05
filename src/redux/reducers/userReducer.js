import { ADD_USER, LOGIN_USER, LOGOUT_USER, FOLLOW_USER } from "../actionTypes";

const initialState = {
  users: [],
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      console.log(action, state, "state");
      const newUser = {
        id: state.users.length + 1,
        username: action.payload.username,
        mobileNumber: action.payload.mobileNumber,
        password: action.payload.password,
        follow: false,
      };

      return {
        ...state,
        users: [...state.users, newUser],
      };
    case LOGIN_USER:
      const { mobileNumber, password } = action.payload;

      const user = state.users.find(
        (u) => u.mobileNumber === mobileNumber && u.password === password
      );
      if (user) {
        const id = action.payload;

        return {
          ...state,
          currentUser: user,
        };
      } else {
        alert("Please Enter Currect Possword");
      }
    case FOLLOW_USER:
      const editeduserFollow = state.users.map((user) => {
        if (user.id == action.payload.id) {
          let usernew = { ...user, follow: !user?.follow };

          return usernew;
        }
        return user;
      });

      return {
        ...state,
        users: editeduserFollow,
      };
    case LOGOUT_USER:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default userReducer;
