import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, editPost } from "../redux/actions/postActions";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const PostForm = () => {
  const { id } = useParams();

  const [content, setContent] = useState("");
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    if (id) {
      const intialPost = posts.find((post) => post.id == id);
      setContent(intialPost?.content);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      console.log("editinpostform", content);
      dispatch(editPost(id, content));
    } else {
      console.log("inpostform", content);
      dispatch(addPost(content));
    }
    history.push("/Dashboard");
  };

  return (
    <div>
      <h2>{id ? "Edit Post" : "Create Post"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="What's on your mind?"
            value={content}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? "Save Changes" : "Post"}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
