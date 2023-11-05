import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUserFollow, logoutUser } from "../redux/actions/userActions";
import { useHistory } from "react-router-dom";

const UserList = () => {
  const users = useSelector((state) => state.user.users);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFollow = (userId) => {
    dispatch(editUserFollow(userId));
  };

  return (
    <div className="container mt-5">
      <h2>User List</h2>

      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between flex-row align-items-center"
          >
            {user.username}
            {currentUser && currentUser.id !== user.id && (
              <button
                className="btn btn-primary"
                onClick={() => handleFollow(user.id)}
              >
                {user?.follow ? "Unfollow" : "Follow"}
              </button>
            )}
            {currentUser && currentUser.id == user.id && (
              <button
                className="btn btn-primary"
                onClick={() => {
                  dispatch(logoutUser());
                  history.push("/login");
                }}
              >
                LogOut
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
