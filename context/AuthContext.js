"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("pharma_user");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {
        localStorage.removeItem("pharma_user");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const res = await fetch(`${API_BASE}/api/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message);
    setUser(data.data);
    localStorage.setItem("pharma_user", JSON.stringify(data.data));
    return data.data;
  };

  const register = async (name, email, password, mobile) => {
    const res = await fetch(`${API_BASE}/api/user/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, mobile }),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message);
    setUser(data.data);
    localStorage.setItem("pharma_user", JSON.stringify(data.data));
    return data.data;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("pharma_user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
