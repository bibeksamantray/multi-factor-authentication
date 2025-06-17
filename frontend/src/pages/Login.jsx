import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        email,
        password,
      });

      if (response.data.success) {
        setShowOtpField(true);
        alert('OTP sent to your email. Check your inbox.');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      alert('An error occurred during login');
    }
  };

  const handleOtpVerification = async () => {
    try {
      const otpResponse = await axios.post('http://localhost:3001/auth/verify-otp', {
        otp,
      });

      if (otpResponse.data.success) {
        alert('OTP Verified. User logged in.');
      } else {
        alert('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error during OTP verification:', error.message);
      alert('An error occurred during OTP verification');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Login to ChatApp
        </h2>

        <form
          className="flex flex-col gap-6"
          onSubmit={e => {
            e.preventDefault();
            showOtpField ? handleOtpVerification() : handleLogin();
          }}
        >
          {!showOtpField ? (
            <>
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </>
          ) : (
            <input
              type="text"
              placeholder="Enter OTP"
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              value={otp}
              onChange={e => setOtp(e.target.value)}
            />
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-md py-3 font-semibold transition"
          >
            {showOtpField ? 'Validate OTP' : 'Login'}
          </button>
        </form>

        {!showOtpField && (
          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-indigo-600 hover:underline">
              Sign Up
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
