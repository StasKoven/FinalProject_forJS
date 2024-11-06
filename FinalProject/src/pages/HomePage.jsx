// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1>Ласкаво просимо до Освітньої платформи!</h1>
            <p>Оберіть сторінку для продовження:</p>
            <div className="button-group">
                <button onClick={() => navigate('/courses')}>Переглянути курси</button>
            </div>
        </div>
    );
};

export default HomePage;
