import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/API';

function RegistrationPage() {
  const [formData, setFormData] = useState({ username: '', password: '', email: '', role: 'user' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      alert('Registration successful!');
      navigate('/login');
    } catch (err) {
      console.error('Registration failed:', err);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="form-container fade-in">
      <h1 className="form-title">Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <select
          className="input"
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="button button-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationPage;