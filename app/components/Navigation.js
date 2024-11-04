"use client";
import Link from "next/link";
import { useUser } from "../contexts/UserContext";
import UserProfileMenu from "./UserProfileMenu";

export default function Navigation() {
  const { user } = useUser();

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-6">
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
              <UserProfileMenu />
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
