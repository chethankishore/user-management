import React from 'react'
import { FaUsers, FaUserPlus, FaDatabase } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-[90vh] bg-gradient-to-r from-purple-700 via-pink-500 to-indigo-700 flex items-center justify-center px-6">

      <div className="text-center text-white max-w-5xl">

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
          Welcome to UserHub
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-gray-200 mb-12 leading-relaxed">
          Manage your users effortlessly with a modern and beautiful dashboard.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Add User Card */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl hover:scale-105 transition duration-300 border border-white/20">
            <FaUserPlus className="text-5xl mx-auto mb-4 text-white" />
            <h2 className="text-2xl font-bold mb-3">Add Users</h2>
            <p className="text-gray-200 mb-5">
              Quickly add new users to your system with ease.
            </p>

            <Link to="/adduser">
              <button className="bg-white text-purple-700 px-6 py-2 rounded-xl font-semibold hover:bg-gray-200 transition">
                Add Now
              </button>
            </Link>
          </div>

          {/* User List Card */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl hover:scale-105 transition duration-300 border border-white/20">
            <FaUsers className="text-5xl mx-auto mb-4 text-white" />
            <h2 className="text-2xl font-bold mb-3">View Users</h2>
            <p className="text-gray-200 mb-5">
              Access and manage all registered users in one place.
            </p>

            <Link to="/userlist">
              <button className="bg-white text-pink-600 px-6 py-2 rounded-xl font-semibold hover:bg-gray-200 transition">
                View List
              </button>
            </Link>
          </div>

          {/* Database Card */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl hover:scale-105 transition duration-300 border border-white/20">
            <FaDatabase className="text-5xl mx-auto mb-4 text-white" />
            <h2 className="text-2xl font-bold mb-3">Secure Data</h2>
            <p className="text-gray-200 mb-5">
              Keep your user data safe and organized efficiently.
            </p>

            <button className="bg-white text-indigo-700 px-6 py-2 rounded-xl font-semibold hover:bg-gray-200 transition">
              Explore
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Home