"use client";
import Link from "next/link";
import { useUser } from "../contexts/UserContext";

export default function Navigation() {
  const { user, logout } = useUser();

  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      // The page will automatically redirect due to auth state change
      window.location.href = "/";
    }
  };

  return (
    <nav>
      <ul className="flex gap-6">
        {user ? (
          <>
            <li>
              <Link
                href="/tickets"
                className="text-[#e5d3b3] hover:text-[#8b9b7c] transition"
              >
                Tickets
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="text-[#e5d3b3] hover:text-[#8b9b7c] transition"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                href="/login"
                className="text-[#e5d3b3] hover:text-[#8b9b7c] transition"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="text-[#e5d3b3] hover:text-[#8b9b7c] transition"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
