"use client";
import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [adminState, setAdminState] = useState({
    selectedTickets: new Set(),
    filters: {
      status: "all",
      priority: "all",
      category: "all",
      assignee: "all",
    },
  });

  const value = {
    adminState,
    setAdminState,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
}
