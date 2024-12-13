import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/API';
import { useAppContext } from '../AppContext';

function LoginPage() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(credentials);
      localStorage.setItem('authToken', data.token);
      dispatch({ type: 'SET_USER', payload: data.user });
      alert('Login successful!');
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid username or password');
    }
  };

  return (
    <main className="main container mx-auto p-6">
      <div className="form-container fade-in">
        <h1 className="form-title">Login</h1>
        <form onSubmit={handleLogin}>
          <input
            className="input"
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
          <button type="submit" className="button button-primary">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;
