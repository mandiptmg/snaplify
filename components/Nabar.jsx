import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaRegUser } from 'react-icons/fa'
const Nabar = () => {
  return (
    <div className='w-[90vw] h-20 mx-auto'>
      <div className='flex items-center py-2 justify-between'>
        <div className='flex items-center gap-2'>
          <Image
            src={'/logo.png'}
            width={100}
            height={100}
            className='w-12 h-12 aspect-square'
            alt='logo'
          />
          <span className='text-base font-semibold text-white'>
            Snaplify
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <Link href='/login'>
            {' '}
            <button className='flex bg-white  border hover:scale-[1.1] duration-700  p-2 rounded items-center gap-1'>
              <span className='capitalize'>signIn</span>{' '}
              <FaRegUser className='text-lg' />
            </button>
          </Link>
          <Link href='/profile'>
            {' '}
            <button className='flex bg-white  border hover:scale-[1.1] duration-700  px-3 p-2 rounded items-center gap-1'>
              <span className='capitalize'>join</span>{' '}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nabar
