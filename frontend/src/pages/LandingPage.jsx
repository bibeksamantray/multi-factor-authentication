import React from 'react'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 text-white px-6">
      <h1 className="text-5xl font-extrabold mb-12">
        Welcome to App
      </h1>
      <div className="flex flex-col sm:flex-row gap-8 max-w-md w-full">
        <button
          onClick={() => navigate('/login')}
          className="flex-1 py-4 px-6 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-xl font-semibold transition"
          aria-label="Login"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/signup')}
          className="flex-1 py-4 px-6 bg-pink-600 hover:bg-pink-700 rounded-xl text-xl font-semibold transition"
          aria-label="Sign Up"
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default LandingPage