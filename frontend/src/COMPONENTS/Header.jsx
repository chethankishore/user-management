import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-lg shadow-lg border-b border-white/20">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-3">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.2qpj5OM3uhet0y9MP6ELjgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="logo"
            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md hover:scale-110 transition duration-300"
          />
          <h1 className="text-3xl font-bold text-white tracking-wide">
            UserHub
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-lg font-semibold">
          
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-purple-700 shadow-md'
                    : 'text-white hover:bg-white/20'
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="adduser"
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-purple-700 shadow-md'
                    : 'text-white hover:bg-white/20'
                }`
              }
            >
              Add User
            </NavLink>
          </li>

          <li>
            <NavLink
              to="userlist"
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-purple-700 shadow-md'
                    : 'text-white hover:bg-white/20'
                }`
              }
            >
              User List
            </NavLink>
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default Header