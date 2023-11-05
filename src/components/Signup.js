import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addUser } from "../redux/actions/userActions";

import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    mobileNumber: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector((state) => state.user.currentUser);
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

  const handleMobileNumberChange = () => {
    const value = formData?.mobileNumber;
    if (/^\d{10}$/.test(value) || value === "") {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    if (handleMobileNumberChange()) {
      dispatch(
        addUser(formData.username, formData.mobileNumber, formData.password)
      );
      history.push("/login");
    } else {
      alert("enter correct mobile number");
    }
  };

  return (
    <div className="container mt-5 signup-form shadow p-3 mb-5 bg-white rounded">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">
            Mobile Number
          </label>
          <input
            type="number"
            maxLength={10}
            minLength={10}
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
