"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FiMail,
  FiLock,
  FiUser,
  FiHome,
  FiCheck,
  FiLoader,
} from "react-icons/fi";

export default function Register() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    unit: "",
    otp: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (step === 1) {
        // Validate email and send OTP
        // TODO: Implement actual email verification
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
        setStep(2);
      } else {
        // Verify OTP and complete registration
        // TODO: Implement actual registration
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
        router.push("/login?registered=true");
      }
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#4a0404] to-[#2d0202] flex items-center justify-center py-8">
      <div className="card max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif text-[#e5d3b3]">Create Account</h1>
          <p className="text-[#e5d3b3]/70 mt-2">Join Chateaux de Paris HOA</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-200 p-3 rounded mb-6">
            {error}
          </div>
        )}

        <div className="mb-8">
          <div className="flex items-center justify-center">
            <div
              className={`w-3 h-3 rounded-full ${
                step >= 1 ? "bg-[#8b9b7c]" : "bg-[#e5d3b3]/20"
              }`}
            />
            <div
              className={`w-16 h-0.5 ${
                step >= 2 ? "bg-[#8b9b7c]" : "bg-[#e5d3b3]/20"
              }`}
            />
            <div
              className={`w-3 h-3 rounded-full ${
                step >= 2 ? "bg-[#8b9b7c]" : "bg-[#e5d3b3]/20"
              }`}
            />
          </div>
          <div className="flex justify-between text-sm text-[#e5d3b3]/70 mt-2">
            <span>Personal Info</span>
            <span>Verification</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-[#e5d3b3] mb-2"
                  >
                    First Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#e5d3b3]/50" />
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full pl-10 p-2 rounded bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
                        focus:outline-none focus:border-[#e5d3b3]/50"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-[#e5d3b3] mb-2"
                  >
                    Last Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#e5d3b3]/50" />
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full pl-10 p-2 rounded bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
                        focus:outline-none focus:border-[#e5d3b3]/50"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="unit" className="block text-[#e5d3b3] mb-2">
                  Unit Number
                </label>
                <div className="relative">
                  <FiHome className="absolute left-3 top-1/2 -translate-y-1/2 text-[#e5d3b3]/50" />
                  <input
                    type="text"
                    id="unit"
                    required
                    className="w-full pl-10 p-2 rounded bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
                      focus:outline-none focus:border-[#e5d3b3]/50"
                    value={formData.unit}
                    onChange={(e) =>
                      setFormData({ ...formData, unit: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-[#e5d3b3] mb-2">
                  Email
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#e5d3b3]/50" />
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full pl-10 p-2 rounded bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
                      focus:outline-none focus:border-[#e5d3b3]/50"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-[#e5d3b3] mb-2">
                  Password
                </label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#e5d3b3]/50" />
                  <input
                    type="password"
                    id="password"
                    required
                    className="w-full pl-10 p-2 rounded bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
                      focus:outline-none focus:border-[#e5d3b3]/50"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>
              </div>
            </>
          ) : (
            <div>
              <label htmlFor="otp" className="block text-[#e5d3b3] mb-2">
                Enter Verification Code
              </label>
              <p className="text-sm text-[#e5d3b3]/70 mb-4">
                We've sent a verification code to {formData.email}
              </p>
              <input
                type="text"
                id="otp"
                required
                maxLength={6}
                className="w-full text-center text-2xl tracking-widest p-2 rounded bg-[#e5d3b3]/10 border border-[#e5d3b3]/20 text-[#e5d3b3]
                  focus:outline-none focus:border-[#e5d3b3]/50"
                value={formData.otp}
                onChange={(e) =>
                  setFormData({ ...formData, otp: e.target.value })
                }
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            {loading ? (
              <FiLoader className="animate-spin" />
            ) : step === 1 ? (
              "Continue"
            ) : (
              "Complete Registration"
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-[#e5d3b3]/70">
          <p>
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#e5d3b3] hover:text-[#8b9b7c] transition"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
