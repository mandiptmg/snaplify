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
    <form onSubmit={handleSubmit} className='w-[17rem] mx-auto'>
      <div className='mb-4'>
        <label htmlFor='username' className='block text-gray-200'>
          Username
        </label>
        <input
          type='text'
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
          placeholder='Enter your username'
          className='w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none p-1 text-gray-800'
          required
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-200'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email address'
          className='w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none p-1 text-gray-800'
          required
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='password' className='block text-gray-200'>
          Password
        </label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Enter your password'
          className='w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none p-1 text-gray-800'
          required
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='confirmPassword' className='block text-gray-200'>
          Confirm Password
        </label>
        <input
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder='Confirm your password'
          className='w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none p-1 text-gray-800'
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
