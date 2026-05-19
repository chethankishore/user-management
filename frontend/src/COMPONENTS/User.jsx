import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import { FaUserCircle, FaEnvelope, FaBirthdayCake, FaPhoneAlt, FaArrowLeft } from "react-icons/fa";

function User() {

  let { state } = useLocation()
  let navigate = useNavigate()

  const user = state?.user

  return (

    <div className="min-h-screen flex items-center justify-center px-5 py-10">

      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 text-white">

        {/* Top Section */}
        <div className="flex flex-col items-center text-center mb-10">

          <div className="bg-white p-5 rounded-full shadow-lg mb-5">
            <FaUserCircle className="text-7xl text-purple-700" />
          </div>

          <h1 className="text-5xl font-bold">
            {user?.name}
          </h1>

          <p className="text-gray-200 mt-2 text-lg">
            User Profile Details
          </p>

        </div>

        {/* User Details */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Email */}
          <div className="bg-white/10 p-5 rounded-2xl border border-white/20 hover:scale-105 transition duration-300">
            <div className="flex items-center gap-3 mb-3">
              <FaEnvelope className="text-2xl text-pink-300" />
              <h2 className="text-2xl font-semibold">
                Email
              </h2>
            </div>

            <p className="text-gray-200 break-words">
              {user?.email}
            </p>
          </div>

          {/* DOB */}
          <div className="bg-white/10 p-5 rounded-2xl border border-white/20 hover:scale-105 transition duration-300">
            <div className="flex items-center gap-3 mb-3">
              <FaBirthdayCake className="text-2xl text-yellow-300" />
              <h2 className="text-2xl font-semibold">
                Date Of Birth
              </h2>
            </div>

            <p className="text-gray-200">
              {user?.dateOfBirth}
            </p>
          </div>

          {/* Mobile */}
          <div className="bg-white/10 p-5 rounded-2xl border border-white/20 hover:scale-105 transition duration-300 md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <FaPhoneAlt className="text-2xl text-green-300" />
              <h2 className="text-2xl font-semibold">
                Mobile Number
              </h2>
            </div>

            <p className="text-gray-200 text-lg">
              {user?.mobileNumber}
            </p>
          </div>

        </div>

        {/* Back Button */}
        <div className="mt-10 text-center">

          <button
            onClick={() => navigate(-1)}
            className="bg-white text-purple-700 px-8 py-3 rounded-xl font-bold hover:scale-105 transition duration-300 shadow-lg inline-flex items-center gap-3"
          >
            <FaArrowLeft />
            Go Back
          </button>

        </div>

      </div>

    </div>
  )
}

export default User