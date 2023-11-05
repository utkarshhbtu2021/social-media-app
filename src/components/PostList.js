import React from "react";
import { useSelector } from "react-redux";
import Post1 from "../asserts/images/post1.jpg";
import { useHistory } from "react-router-dom";
import "../css/postListModule.css";

const PostList = () => {
  const posts = useSelector((state) => state.post.posts);
  const currentUser = useSelector((state) => state.user.currentUser);
  const history = useHistory();

  const handleLike = (postId) => {
    // Implement like logic here
  };

  const handleAddClick = () => {
    history.push(`create-post`);
  };

  const handleEditClick = (id) => {
    history.push(`/edit-post/${id}`);
  };

  return (
    <div className="container mt-5">
      <h2>Post Feed</h2>
      <div className="d-flex justify-content-between mb-3">
        <h2>Add Feed</h2>
        <button className="btn btn-primary" onClick={handleAddClick}>
          Add Feed
        </button>
      </div>
      <ul
        className="list-group"
        style={{ maxHeight: "300px", overflowY: "auto", overflowX: "hidden" }}
      >
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <div className="d-flex align-items-center">
              <img
                src={Post1}
                alt="User"
                className="rounded-circle mr-2"
                style={{ width: "50px", height: "50px" }}
              />
              <div className="mx-2">
                <h5>User Post</h5>
                <div>{post.content}</div>
              </div>
            </div>
            <img src={Post1} alt="Post" className="img-fluid mt-3" />
            {currentUser && (
              <div className="mt-3">
                <button
                  className="btn btn-link"
                  onClick={() => handleLike(post.id)}
                >
                  Like
                </button>
                <button
                  className="btn btn-link ml-3"
                  onClick={() => {
                    handleEditClick(post.id);
                  }}
                >
                  Edit
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
