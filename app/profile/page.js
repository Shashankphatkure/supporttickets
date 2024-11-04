"use client";
import { useState } from "react";
import { FiUser, FiMail, FiHome, FiPhone, FiCamera } from "react-icons/fi";

export default function Profile() {
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    unit: "304",
    phone: "(555) 123-4567",
    avatar: null,
  });

  return (
    <main className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-serif text-[#e5d3b3] mb-8">
            Profile Settings
          </h1>

          <div className="bg-[#2a3a1f]/60 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-6 mb-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-[#4a0404]/60 flex items-center justify-center">
                  {profile.avatar ? (
                    <img
                      src={profile.avatar}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <FiUser size={40} className="text-[#e5d3b3]" />
                  )}
                </div>
                <button className="absolute bottom-0 right-0 p-2 bg-[#4a0404] rounded-full text-[#e5d3b3] hover:bg-[#5a1515] transition">
                  <FiCamera size={16} />
                </button>
              </div>
              <div>
                <h2 className="text-xl font-serif text-[#e5d3b3]">
                  {profile.firstName} {profile.lastName}
                </h2>
                <p className="text-[#e5d3b3]/70">Unit {profile.unit}</p>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#e5d3b3] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={profile.firstName}
                    className="w-full p-2 rounded bg-[#1c2516]/40 border border-[#e5d3b3]/20 text-[#e5d3b3]"
                  />
                </div>
                <div>
                  <label className="block text-[#e5d3b3] mb-2">Last Name</label>
                  <input
                    type="text"
                    value={profile.lastName}
                    className="w-full p-2 rounded bg-[#1c2516]/40 border border-[#e5d3b3]/20 text-[#e5d3b3]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#e5d3b3] mb-2">Email</label>
                <input
                  type="email"
                  value={profile.email}
                  className="w-full p-2 rounded bg-[#1c2516]/40 border border-[#e5d3b3]/20 text-[#e5d3b3]"
                />
              </div>

              <div>
                <label className="block text-[#e5d3b3] mb-2">Phone</label>
                <input
                  type="tel"
                  value={profile.phone}
                  className="w-full p-2 rounded bg-[#1c2516]/40 border border-[#e5d3b3]/20 text-[#e5d3b3]"
                />
              </div>

              <button type="submit" className="btn-primary">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
