'use client'

import { FaGoogle } from 'react-icons/fa'
import { signIn } from 'next-auth/react'

const AuthButton = () => {
  const handleSignIn = async () => {
    await signIn('google', {
      callbackUrl: '/', // Redirect to home page after login
    })
  }
  return (
    <div>
      <button
        onClick={handleSignIn}
        className='flex w-full items-center bg-white font-semibold justify-center text-gray-800 p-2 rounded-md gap-3'
      >
        <FaGoogle className='text-xl' />{' '}
        <span className=''>Continue with Google</span>
      </button>
    </div>
  )
}

export default AuthButton
