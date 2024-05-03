'use client'
import React, { useState } from 'react'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you can handle form submission, e.g., send data to server
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className='w-full mx-auto'>
      <div className='mb-4'>
        <label htmlFor='username' className='block text-gray-300 font-bold'>
          Username
        </label>
        <input
          type='text'
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
          placeholder='Enter your username'
          className='w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none p-2 mt-1 text-gray-800'
          required
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-300 font-bold'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email'
          className='w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none p-2 mt-1 text-gray-800'
          required
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='password' className='block text-gray-300 font-bold'>
          Password
        </label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Enter your password'
          className='w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none p-2 mt-1 text-gray-800'
          required
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='confirm Password' className='block text-gray-300 font-bold'>
          Confirm Password
        </label>
        <input
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder='Enter Confirm your password'
          className='w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none p-2 mt-1 text-gray-800'
          required
        />
      </div>
      <button
        type='submit'
        className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'
      >
        Sign Up
      </button>
    </form>
  )
}

export default SignupForm
