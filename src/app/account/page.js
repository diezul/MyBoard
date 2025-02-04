'use client';

import { useState } from "react";

export default function Account() {
  const [profile, setProfile] = useState({ username: "", email: "" });

  const updateProfile = (key, value) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
      <div className="mb-4">
        <label className="block mb-1">Username</label>
        <input
          type="text"
          value={profile.username}
          onChange={(e) => updateProfile("username", e.target.value)}
          className="w-full p-2 bg-gray-800 text-white rounded"
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          value={profile.email}
          onChange={(e) => updateProfile("email", e.target.value)}
          className="w-full p-2 bg-gray-800 text-white rounded"
          placeholder="Enter your email"
        />
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        Save Changes
      </button>
    </div>
  );
}
