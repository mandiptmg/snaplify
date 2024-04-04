'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaRegUser } from 'react-icons/fa'
import { useSession, signOut } from 'next-auth/react'
import useGlobalContext from '@/context/Context'
import AuthComponent from './AuthComponent'
const Nabar = () => {
  const { data: session } = useSession()
  const { setBar } = useGlobalContext()
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
          <span className='text-base font-semibold text-white'>Snaplify</span>
        </div>
        <div className='flex items-center gap-2'>
          <AuthComponent />
          <Link href='/upload'>
            {' '}
            <button className='flex bg-white  border hover:scale-[1.1] duration-700  px-3 p-2 rounded items-center gap-1'>
              <span className='capitalize'>Upload</span>{' '}
            </button>
          </Link>
          <button
            onClick={() => setBar(true)}
            className='text-white md:hidden text-lg hover:scale-[1.1] duration-700 '
          >
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nabar
