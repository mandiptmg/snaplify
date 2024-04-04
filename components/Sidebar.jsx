'use client'
import { useState } from 'react'
import Link from 'next/link'
import useGlobalContext from '@/context/Context'
import { menuItems } from '@/date'
import Image from 'next/image'
import {
  FaChevronDown,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaSearch,
  FaTimes,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { GoVideo } from 'react-icons/go'
import { FaDownload } from 'react-icons/fa6'
import { HiOutlinePhoto } from 'react-icons/hi2'

const Sidebar = () => {
  const { setBar, bar, icon, setIcon, text, setText, setOpen, open } =
    useGlobalContext()

  return (
    <div>
      {bar && (
        <div className='w-screen absolute top-0 left-0 h-screen overflow-y-auto overflow-x-hidden bg-black'>
          <header className='flex px-7 border-b pb-1 gap-2 justify-between items-center h-20'>
            <Image
              src={'/logo.png'}
              width={100}
              height={100}
              className='w-12 h-12 aspect-square'
              alt='logo'
            />
            <div className='w-full bg-white rounded-lg p-1'>
              <div className='flex items-center gap-1'>
                <div
                  onMouseLeave={() => {
                    setTimeout(() => {
                      setOpen(false)
                    }, 1000)
                  }}
                  className='relative'
                >
                  <h1
                    onMouseEnter={() => {
                      setOpen(true)
                    }}
                    className='flex items-center cursor-pointer group bg-gray-300 rounded-md p-1  gap-1'
                  >
                    {icon}{' '}
                    <span className='hidden md:inline-flex items-center gap-2 '>
                      <span className='text-base text-black capitalize font-semibold '>
                        {text}
                      </span>
                      <FaChevronDown className='text-base text-black font-normal group-hover:rotate-180 duration-500' />
                    </span>
                  </h1>
                  {open && (
                    <ul
                      onMouseEnter={() => {
                        setOpen(true)
                      }}
                      onMouseLeave={() => {
                        setOpen(false)
                      }}
                      className='rounded-lg absolute left-0 -bottom-[5.7rem] w-[110px] text-black bg-white border'
                    >
                      <li className='flex items-center gap-1'>
                        <button
                          onClick={() => {
                            setText('photos')
                            setIcon(
                              <HiOutlinePhoto className='text-lg text-black' />
                            )
                          }}
                          className='flex w-full items-center hover:bg-gray-300 p-2 rounded-t-lg gap-1'
                        >
                          <HiOutlinePhoto className='text-lg' /> Photos
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setText('videos')
                            setIcon(<GoVideo className='text-lg text-black' />)
                          }}
                          className='flex w-full items-center hover:bg-gray-300 rounded-b-lg p-2 gap-1'
                        >
                          <GoVideo className='text-lg' /> Videos
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
                <input
                  type='text'
                  className='w-full focus:outline-none bg-white text-black p-2'
                  placeholder={`Search for ${text}`}
                  onChange={(e) => setSearch(e.target.value)}
                />{' '}
                <button className='p-2'>
                  {' '}
                  <FaSearch
                    onClick={() => setSearch(text)}
                    className='text-lg text-gray-500  hover:text-gray-600'
                  />
                </button>
              </div>
            </div>

            <button className='text-white text-xl hover:scale-[1.1] duration-700  '>
              <FaDownload />
            </button>
            <button
              onClick={() => setBar(false)}
              className='text-white text-xl hover:text-red-600  '
            >
              <FaTimes />
            </button>
          </header>
          <div className='grid items-center gap-1 grid-cols-1'>
            {menuItems.map((item, index) => (
              <div key={item.index}>
                <Link href={item.link} onClick={() => setBar(false)}>
                  <h1
                    className={`cursor-pointer  ${
                      index === 6 || index === 12 || index === 16
                        ? 'border-b border-gray-500 py-2 pb-4'
                        : ''
                    } text-lg font-bold text-white p-3 hover:bg-gray-400 `}
                  >
                    {item.name}
                  </h1>
                </Link>
              </div>
            ))}
            <div className='flex p-4 items-center items justify-between'>
              {' '}
              <button
                className='text-2xl text-white bg-black'
                onClick={() => window.open('https://facebook.com')}
              >
                <FaFacebook />
              </button>
              <button
                className='text-2xl text-white bg-black'
                onClick={() => window.open('https://instagram.com')}
              >
                <FaInstagram />
              </button>
              <button
                className='text-2xl text-white bg-black'
                onClick={() => window.open('https://twitter.com')}
              >
                <FaTwitter />
              </button>
              <button
                className='text-2xl text-white bg-black'
                onClick={() => window.open('https://pinterest.com')}
              >
                <FaPinterest />
              </button>
              <button
                className='text-2xl text-white bg-black'
                onClick={() => window.open('https://youtube.com')}
              >
                <FaYoutube />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar
