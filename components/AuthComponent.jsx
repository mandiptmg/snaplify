'use client'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { FaChevronCircleDown, FaRegUser } from 'react-icons/fa'
import { useState } from 'react'
const AuthComponent = () => {
  const [active, setActive] = useState(false)
  const { data: session } = useSession()
  if (session) {
    return (
      <div className='relative cursor-pointer'>
        <div
          onClick={() => {
            setActive(!active)
            setTimeout(() => {
              setActive(false) // Assuming setActive is a state setter function
            }, 4000)
          }}
          className='flex group items-center gap-1'
        >
          <Image
            src={session.user.image}
            width={100}
            height={100}
            title={session.user.name}
            alt={session.user.name}
            className='w-10 h-10  rounded-full object-cover'
          />
          <FaChevronCircleDown className='text-base bg-transparent text-white group-hover:rotate-180 duration-700' />
        </div>
        {active && (
          <div
            onClick={() => {
              signOut()
              setActive(false) // 2000 milliseconds delay (adjust as needed)
            }}
            className='px-2 py-1 absolute -left-4  bg-white -bottom-12  h-full inline-flex rounded  '
          >
            <h1 className='text-lg text-semibold'>SignOut</h1>
          </div>
        )}
      </div>
    )
  } else {
    return (
      <div>
        <Link href='/login'>
          {' '}
          <button className='md:inline-flex bg-white hidden  border hover:scale-[1.1] duration-700  p-2 rounded items-center gap-1'>
            <span className='capitalize '>signIn</span>{' '}
            <FaRegUser className='text-lg' />
          </button>
        </Link>
      </div>
    )
  }
}

export default AuthComponent
