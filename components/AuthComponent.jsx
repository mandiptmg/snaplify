'use client'
// components/AuthComponent.tsx
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaRegUser } from 'react-icons/fa'
function AuthComponent() {
  const { data: session } = useSession()
  const [active, setActive] = useState(false)

  if (session) {
    const Image = session.user?.image || 'User'
    return (
      <>
        <div className='relative'>
          <Image
            src={Image}
            onClick={() => setActive(true)}
            alt={'User'}
            width={30}
            height={30}
            className='rounded-full cursor-pointer '
          />
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className={`absolute -bottom-12 ${
              active ? '' : 'hidden'
            }  left-1/2 h-auto w-[70px] p-2 bg-white rounded-lg text-black`}
          >
            <button onClick={() => signOut()}>
              <h1 className='text-xs text-center capitalize font-semibold'>
                log Out
              </h1>
            </button>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
       <Link href='/login'>
            {' '}
            <button className='md:inline-flex bg-white hidden  border hover:scale-[1.1] duration-700  p-2 rounded items-center gap-1'>
              <span className='capitalize '>signIn</span>{' '}
              <FaRegUser className='text-lg' />
            </button>
          </Link>
      </>
    )
  }
}

export default AuthComponent
