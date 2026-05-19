import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaUsers,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowRight
} from "react-icons/fa";

function UserList() {

  let [users, setUsers] = useState([])
  let [error, setError] = useState(null)
  let [loading, setLoading] = useState(false)

  let navigate = useNavigate()

  const API = "https://user-management-app-sqlc.onrender.com";

  const onUserClick = (userObj) => {
    navigate('/user', { state: { user: userObj } })
  }

  useEffect(() => {

    async function getUsers() {

      setLoading(true)

      try {

        const res = await fetch(`${API}/user-api/users`, {
          method: "GET"
        })

        let data = await res.json()

        if (res.status === 200) {
          setUsers(data.payload)
        }

      } catch (err) {

        setError(err.message)

      } finally {

        setLoading(false)

      }
    }

    getUsers()

  }, [])

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl font-bold text-white animate-pulse">
          Loading Users...
        </h1>
      </div>
    )
  }

  // Error
  if (error !== null) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-red-300 text-2xl">
          {error}
        </p>
      </div>
    )
  }

  return (

    <div className="min-h-screen px-5 py-10">

      {/* Heading */}
      <div className="text-center mb-12">

        <div className="flex justify-center mb-4">
          <div className="bg-white p-5 rounded-full shadow-xl">
            <FaUsers className="text-5xl text-purple-700" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-white">
          User Directory
        </h1>

        <p className="text-gray-200 mt-4 text-lg">
          View and manage all registered users
        </p>

      </div>

      {/* No Users */}
      {
        users.length === 0 &&
        <div className="text-center text-white text-3xl">
          No Users Found
        </div>
      }

      {/* User Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {
          users.map((userObj) => (

            <div
              key={userObj._id}
              onClick={() => onUserClick(userObj)}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-2xl hover:scale-105 hover:bg-white/20 transition duration-300 cursor-pointer"
            >

              {/* Avatar */}
              <div className="flex justify-center mb-5">

                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">

                  <span className="text-4xl font-bold text-purple-700">
                    {userObj.name?.charAt(0).toUpperCase()}
                  </span>

                </div>

              </div>

              {/* Name */}
              <h2 className="text-3xl font-bold text-white text-center mb-4">
                {userObj.name}
              </h2>

              {/* Email */}
              <div className="flex items-center gap-3 text-gray-200 mb-3 break-all">
                <FaEnvelope className="text-pink-300" />
                <p>{userObj.email}</p>
              </div>

              {/* Mobile */}
              <div className="flex items-center gap-3 text-gray-200 mb-6">
                <FaPhoneAlt className="text-green-300" />
                <p>{userObj.mobileNumber}</p>
              </div>

              {/* Button */}
              <button
                className="w-full bg-white text-purple-700 py-3 rounded-xl font-bold hover:scale-105 transition duration-300 flex items-center justify-center gap-3"
              >
                View Profile
                <FaArrowRight />
              </button>

            </div>

          ))
        }

      </div>

    </div>
  )
}

export default UserList