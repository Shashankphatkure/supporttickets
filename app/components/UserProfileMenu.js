"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "../contexts/UserContext";
import {
  FiUser,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiBell,
} from "react-icons/fi";

export default function UserProfileMenu() {
  const { user, logout } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <div className="flex items-center gap-4">
        <button
          className="relative text-[#e5d3b3] hover:text-[#8b9b7c] transition"
          aria-label="Notifications"
        >
          <FiBell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-[#e5d3b3] hover:text-[#8b9b7c] transition"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-[#1c2516]">
            {user?.avatar ? (
              <Image
                src={user.avatar}
                alt="Profile"
                fill
                className="object-cover"
              />
            ) : (
              <FiUser className="w-full h-full p-1" />
            )}
          </div>
          <span className="hidden md:block">{user?.name || "User"}</span>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#1c2516] border border-[#e5d3b3]/10">
          <div className="py-1">
            <Link
              href="/profile"
              className="flex items-center gap-2 px-4 py-2 text-sm text-[#e5d3b3] hover:bg-[#e5d3b3]/10"
              onClick={() => setIsOpen(false)}
            >
              <FiUser size={16} />
              Profile Settings
            </Link>
            <Link
              href="/settings"
              className="flex items-center gap-2 px-4 py-2 text-sm text-[#e5d3b3] hover:bg-[#e5d3b3]/10"
              onClick={() => setIsOpen(false)}
            >
              <FiSettings size={16} />
              Account Settings
            </Link>
            <Link
              href="/help"
              className="flex items-center gap-2 px-4 py-2 text-sm text-[#e5d3b3] hover:bg-[#e5d3b3]/10"
              onClick={() => setIsOpen(false)}
            >
              <FiHelpCircle size={16} />
              Help & Support
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm text-red-300 hover:bg-[#e5d3b3]/10 w-full text-left"
            >
              <FiLogOut size={16} />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
