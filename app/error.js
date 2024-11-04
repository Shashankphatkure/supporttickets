"use client";
import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4a0404] to-[#2d0202] flex items-center justify-center">
      <div className="card max-w-md w-full mx-4 text-center">
        <h2 className="text-2xl font-serif text-[#e5d3b3] mb-4">
          Something went wrong
        </h2>
        <p className="text-[#e5d3b3]/70 mb-6">
          {error.message || "An unexpected error occurred."}
        </p>
        <div className="space-x-4">
          <button onClick={reset} className="btn-primary">
            Try again
          </button>
          <Link
            href="/"
            className="text-[#e5d3b3] hover:text-[#8b9b7c] transition"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
