import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import UserList from "./components/UserList";
import Dashboard from "./components/Dashboard";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="container mt-3">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/posts" component={PostList} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/create-post" component={PostForm} />
          <Route path="/edit-post/:id" component={PostForm} />
          <Route path="/users" component={UserList} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
