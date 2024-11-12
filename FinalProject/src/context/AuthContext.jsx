import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Зберігає дані про користувача

  const login = (userData) => {
    setUser(userData); // Симуляція авторизації
    return true;
  };

  const logout = () => setUser(null); // Вихід із системи

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
