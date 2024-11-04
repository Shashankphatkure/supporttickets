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
          <h1 className="section-title">Account Settings</h1>

          <div className="space-y-6">
            {/* Notifications */}
            <div className="card">
              <h2 className="text-xl font-serif text-accent mb-4 flex items-center gap-2">
                <FiBell className="text-primary-light" />
                Notifications
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-accent">Email Notifications</p>
                    <p className="text-sm text-accent/70">
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
                    <div
                      className="w-11 h-6 bg-background-card rounded-full peer 
                      peer-checked:after:translate-x-full peer-checked:after:border-white 
                      after:content-[''] after:absolute after:top-0.5 after:left-[2px] 
                      after:bg-white after:border-gray-300 after:border after:rounded-full 
                      after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"
                    ></div>
                  </label>
                </div>

                {/* Add more notification settings */}
              </div>
            </div>

            {/* Security */}
            <div className="card">
              <h2 className="text-xl font-serif text-accent mb-4 flex items-center gap-2">
                <FiLock className="text-primary-light" />
                Security
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-accent">Two-Factor Authentication</p>
                    <p className="text-sm text-accent/70">
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
                    <div
                      className="w-11 h-6 bg-background-card rounded-full peer 
                      peer-checked:after:translate-x-full peer-checked:after:border-white 
                      after:content-[''] after:absolute after:top-0.5 after:left-[2px] 
                      after:bg-white after:border-gray-300 after:border after:rounded-full 
                      after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"
                    ></div>
                  </label>
                </div>

                <button className="text-accent hover:text-primary-light transition">
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
