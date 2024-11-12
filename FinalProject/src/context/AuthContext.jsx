import React, { createContext, useContext, useState } from "react";

// Створюємо контекст
export const AuthContext = createContext();

// Провайдер контексту
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (credentials) => {
    // Приклад перевірки логіна та пароля
    if (credentials.username === "admin" && credentials.password === "1234") {
      setUser({ username: "admin" });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Хук для зручного використання контексту
export const useAuth = () => {
  return useContext(AuthContext);
};
