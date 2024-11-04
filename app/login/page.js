"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "../contexts/UserContext";

export default function Login() {
  const router = useRouter();
  const { login } = useUser();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const success = await login(formData);
      if (success) {
        router.push("/tickets");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred during login");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#4a0404] to-[#2d0202] flex items-center justify-center">
      <div className="card max-w-md w-full mx-4">
        <h1 className="text-3xl font-serif text-[#e5d3b3] mb-8 text-center">
          Login
        </h1>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-200 p-3 rounded mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-[#e5d3b3] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full p-2 rounded bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
                focus:outline-none focus:border-[#e5d3b3]/50"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[#e5d3b3] mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="w-full p-2 rounded bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
                focus:outline-none focus:border-[#e5d3b3]/50"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-[#e5d3b3]/70">
          <p>
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-[#e5d3b3] hover:text-[#8b9b7c] transition"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
