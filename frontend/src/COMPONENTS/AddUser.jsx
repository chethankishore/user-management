import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom-dom'
import { FaUserPlus } from "react-icons/fa";

function AddUser() {

  let {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  let [error, setError] = useState(null)
  let [loading, setLoading] = useState(false)

  let navigate = useNavigate()

  const API = "https://user-management-app-sqlc.onrender.com";

  const onUserCreate = async (newUser) => {

    setLoading(true)

    try {

      let res = await fetch(`${API}/user-api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      })

      if (res.status === 201) {
        navigate("/userlist")
      }

    } catch (err) {
      setError(err.message)
    }
    finally {
      setLoading(false)
    }
  }

  return (

    <div className="min-h-screen bg-gradient-to-r from-purple-700 via-pink-500 to-indigo-700 flex items-center justify-center px-5 py-10">

      <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8">

        {/* Heading */}
        <div className="text-center mb-8">

          <div className="flex justify-center mb-4">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <FaUserPlus className="text-4xl text-purple-700" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white">
            Add New User
          </h1>

          <p className="text-gray-200 mt-2">
            Fill the details to create a new user
          </p>

        </div>

        {/* Error */}
        {
          error &&
          <p className="bg-red-500/20 text-red-200 p-3 rounded-xl mb-5 text-center">
            {error}
          </p>
        }

        {/* Form */}
        <form
          onSubmit={handleSubmit(onUserCreate)}
          className="flex flex-col gap-5"
        >

          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Enter Name"
              {...register("name", {
                required: "Name is required"
              })}
              className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-200 outline-none border border-white/20 focus:border-white"
            />

            {
              errors.name &&
              <p className="text-red-200 mt-1 text-sm">
                {errors.name.message}
              </p>
            }
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Enter Email"
              {...register("email", {
                required: "Email is required"
              })}
              className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-200 outline-none border border-white/20 focus:border-white"
            />

            {
              errors.email &&
              <p className="text-red-200 mt-1 text-sm">
                {errors.email.message}
              </p>
            }
          </div>

          {/* DOB */}
          <div>
            <input
              type="date"
              {...register("dateOfBirth", {
                required: "Date of Birth is required"
              })}
              className="w-full p-4 rounded-xl bg-white/20 text-white outline-none border border-white/20 focus:border-white"
            />

            {
              errors.dateOfBirth &&
              <p className="text-red-200 mt-1 text-sm">
                {errors.dateOfBirth.message}
              </p>
            }
          </div>

          {/* Mobile */}
          <div>
            <input
              type="number"
              placeholder="Enter Mobile Number"
              {...register("mobileNumber", {
                required: "Mobile Number is required",
                minLength: {
                  value: 10,
                  message: "Mobile number must be 10 digits"
                }
              })}
              className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-200 outline-none border border-white/20 focus:border-white"
            />

            {
              errors.mobileNumber &&
              <p className="text-red-200 mt-1 text-sm">
                {errors.mobileNumber.message}
              </p>
            }
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-white text-purple-700 font-bold py-4 rounded-xl hover:scale-105 transition duration-300 shadow-lg"
          >
            {
              loading ? "Adding User..." : "Add User"
            }
          </button>

        </form>

      </div>

    </div>
  )
}

export default AddUser