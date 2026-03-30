'use client'
import Link from "next/link";
import React from "react";
import { FaUser, FaShoppingBag, FaCog, FaHome } from "react-icons/fa";

const UserDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-5">
        <h2 className="text-xl font-bold mb-6">User Panel</h2>

        <ul>
          <li className="flex items-center gap-2 mb-4 cursor-pointer text-blue-600">
            <FaHome /> Dashboard
          </li><Link href="/user/profile" className="flex items-center gap-2 mb-4 cursor-pointer hover:text-blue-500"> <FaUser />Profile</Link>
          
          <li className="flex items-center gap-2 mb-4 cursor-pointer hover:text-blue-500">
            <FaShoppingBag /> Orders
          </li>
          <li className="flex items-center gap-2 mb-4 cursor-pointer hover:text-blue-500">
            <FaCog /> Settings
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Welcome Back 👋</h1>
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="rounded-full"
            />
            <span>Aayush</span>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white p-5 rounded shadow mb-6 flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/80"
            alt="profile"
            className="rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold">Aayush Mehrotra</h2>
            <p className="text-gray-500">aayush@email.com</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-6">

          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-gray-500">Orders</h3>
            <p className="text-2xl font-bold">12</p>
          </div>

          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-gray-500">Wishlist</h3>
            <p className="text-2xl font-bold">5</p>
          </div>

          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-gray-500">Reviews</h3>
            <p className="text-2xl font-bold">8</p>
          </div>

        </div>

        {/* Recent Activity */}
        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

          <ul>
            <li className="mb-3 border-b pb-2">
              ✅ You placed an order (#1234)
            </li>
            <li className="mb-3 border-b pb-2">
              ❤️ Added item to wishlist
            </li>
            <li>
              ⭐ Reviewed a product
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default UserDashboard;