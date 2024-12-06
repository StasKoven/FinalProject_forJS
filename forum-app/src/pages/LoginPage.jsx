import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username && formData.password) {
      console.log("Logged in as:", formData.username);
      navigate("/");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Login to Forum</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="form-button">
          Login
        </button>
      </form>
      <p className="text-center">
        Don't have an account?{" "}
        <span className="text-link" onClick={() => navigate("/register")}>
          Register here
        </span>
      </p>
    </div>
  );
}

export default LoginPage;
