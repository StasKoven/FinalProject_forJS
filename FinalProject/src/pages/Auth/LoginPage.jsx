import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Додамо стилі

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Демо-логіка для авторизації (надалі додати реальний API)
    if (username === 'admin' && password === 'password') {
      navigate('/home');
    } else {
      alert('Невірні дані для входу');
    }
  };

  return (
    <div className="login-container">
      <h2>Вхід до платформи</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Логін"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Увійти</button>
      </form>
    </div>
  );
};

export default LoginPage;