import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../redux/actions/userActions";
import { useSelector } from "react-redux";

const Login = () => {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    password: "",
  });
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  if (currentUser) {
    history.push("/dashboard");
    return null;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(formData.mobileNumber, formData.password));
    console.log(currentUser, "aaaaaaaaaaaaaaaaaa");
    if (currentUser) {
      history.push("/Dashboard");
    }
  };

  const handleSignUpClick = () => {
    history.push("/signup");
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">
            Mobile Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>

      <div className="mt-3">
        <button className="btn btn-link" onClick={handleSignUpClick}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
