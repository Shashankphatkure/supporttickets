"use client";
import { useState } from "react";
import { useUser } from "../../contexts/UserContext";
import {
  FiBell,
  FiSearch,
  FiHelpCircle,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

export default function AdminHeader() {
  const { user, logout } = useUser();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="bg-[#1c2516]/90 border-b border-[#e5d3b3]/10 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#e5d3b3]/50" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 p-2 rounded-lg bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
                focus:outline-none focus:border-[#e5d3b3]/50"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="relative text-[#e5d3b3] hover:text-[#8b9b7c] transition p-2"
            aria-label="Notifications"
          >
            <FiBell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          <button
            className="text-[#e5d3b3] hover:text-[#8b9b7c] transition p-2"
            aria-label="Help"
          >
            <FiHelpCircle size={20} />
          </button>

          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 text-[#e5d3b3] hover:text-[#8b9b7c] transition"
            >
              <div className="w-8 h-8 rounded-full bg-[#e5d3b3]/10 flex items-center justify-center">
                <FiUser size={18} />
              </div>
              <span className="hidden md:block">Admin</span>
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#1c2516] border border-[#e5d3b3]/10">
                <div className="py-1">
                  <button
                    onClick={logout}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-red-300 hover:bg-[#e5d3b3]/10 w-full"
                  >
                    <FiLogOut size={16} />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
