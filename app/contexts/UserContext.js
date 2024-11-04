"use client";
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement check for existing session
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      // TODO: Add actual authentication check
      setLoading(false);
    } catch (error) {
      console.error("Auth check failed:", error);
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      // TODO: Implement actual login logic
      setUser({ id: "1", email: credentials.email });
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      // TODO: Implement actual logout logic
      setUser(null);
      return true;
    } catch (error) {
      console.error("Logout failed:", error);
      return false;
    }
  };

  const value = {
    user,
    loading,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
