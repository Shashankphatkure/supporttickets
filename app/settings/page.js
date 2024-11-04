"use client";
import { useState } from "react";
import { FiBell, FiLock, FiMail } from "react-icons/fi";

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    twoFactorAuth: false,
  });

  return (
    <main className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-serif text-[#e5d3b3] mb-8">
            Account Settings
          </h1>

          <div className="space-y-6">
            {/* Notifications */}
            <div className="bg-[#2a3a1f]/60 rounded-lg p-6">
              <h2 className="text-xl font-serif text-[#e5d3b3] mb-4 flex items-center gap-2">
                <FiBell />
                Notifications
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#e5d3b3]">Email Notifications</p>
                    <p className="text-sm text-[#e5d3b3]/70">
                      Receive updates about your tickets via email
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.emailNotifications}
                      onChange={() => {}}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-[#1c2516] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4a0404]"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#e5d3b3]">Push Notifications</p>
                    <p className="text-sm text-[#e5d3b3]/70">
                      Receive instant notifications in your browser
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.pushNotifications}
                      onChange={() => {}}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-[#1c2516] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4a0404]"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-[#2a3a1f]/60 rounded-lg p-6">
              <h2 className="text-xl font-serif text-[#e5d3b3] mb-4 flex items-center gap-2">
                <FiLock />
                Security
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#e5d3b3]">Two-Factor Authentication</p>
                    <p className="text-sm text-[#e5d3b3]/70">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.twoFactorAuth}
                      onChange={() => {}}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-[#1c2516] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4a0404]"></div>
                  </label>
                </div>

                <button className="text-[#e5d3b3] hover:text-[#8b9b7c] transition">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
