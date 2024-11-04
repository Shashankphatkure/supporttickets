"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "../contexts/UserContext";
import {
  FiHome,
  FiPlusCircle,
  FiList,
  FiUser,
  FiSettings,
} from "react-icons/fi";

export default function MobileNavigation() {
  const pathname = usePathname();
  const { user } = useUser();

  const isActive = (path) => pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1c2516]/95 border-t border-[#e5d3b3]/10 md:hidden">
      <div className="flex justify-around items-center h-16">
        <Link
          href="/"
          className={`flex flex-col items-center justify-center flex-1 py-1
            ${isActive("/") ? "text-[#e5d3b3]" : "text-[#e5d3b3]/70"}`}
        >
          <FiHome size={20} />
          <span className="text-xs mt-1">Home</span>
        </Link>

        <Link
          href="/tickets"
          className={`flex flex-col items-center justify-center flex-1 py-1
            ${isActive("/tickets") ? "text-[#e5d3b3]" : "text-[#e5d3b3]/70"}`}
        >
          <FiList size={20} />
          <span className="text-xs mt-1">Tickets</span>
        </Link>

        <Link
          href="/tickets/new"
          className="flex flex-col items-center justify-center flex-1 py-1 text-[#8b9b7c]"
        >
          <div className="bg-[#4a0404] p-3 rounded-full -mt-8 border-4 border-[#1c2516]/95">
            <FiPlusCircle size={24} />
          </div>
          <span className="text-xs mt-1">New</span>
        </Link>

        {user ? (
          <Link
            href="/profile"
            className={`flex flex-col items-center justify-center flex-1 py-1
              ${isActive("/profile") ? "text-[#e5d3b3]" : "text-[#e5d3b3]/70"}`}
          >
            <FiUser size={20} />
            <span className="text-xs mt-1">Profile</span>
          </Link>
        ) : (
          <Link
            href="/login"
            className={`flex flex-col items-center justify-center flex-1 py-1
              ${isActive("/login") ? "text-[#e5d3b3]" : "text-[#e5d3b3]/70"}`}
          >
            <FiUser size={20} />
            <span className="text-xs mt-1">Login</span>
          </Link>
        )}

        <Link
          href="/settings"
          className={`flex flex-col items-center justify-center flex-1 py-1
            ${isActive("/settings") ? "text-[#e5d3b3]" : "text-[#e5d3b3]/70"}`}
        >
          <FiSettings size={20} />
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </div>
    </div>
  );
}
