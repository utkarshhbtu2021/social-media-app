import React from "react";
import UserList from "./UserList";
import PostList from "./PostList";

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <UserList />
        </div>
        <div className="col-md-8">
          <PostList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
