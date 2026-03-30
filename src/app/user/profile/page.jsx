"use client";

import React, { useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "Aayush Mehrotra",
    email: "aayush@email.com",
    bio: "MERN Stack Developer",
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEditMode(false);

    // यहाँ API call कर सकते हो
    console.log("Updated User:", user);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">

        {/* Profile Header */}
        <div className="flex items-center gap-5 mb-6">
          <img
            src="/aayush2.png"
            alt="profile"
            className="rounded-full w-24 h-24"
          />
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>

        {/* Profile Form */}
        <div className="space-y-4">

          <div>
            <label className="text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              disabled={!editMode}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          <div>
            <label className="text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              disabled={!editMode}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          <div>
            <label className="text-gray-600">Bio</label>
            <textarea
              name="bio"
              value={user.bio}
              disabled={!editMode}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Edit Profile
            </button>
          ) : (
            <>
              <button
                onClick={() => setEditMode(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Save Changes
              </button>
            </>
          )}
        </div>

      </div>

    </div>
  );
};

export default ProfilePage;