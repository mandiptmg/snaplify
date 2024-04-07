'use client'
import { FaSearch } from 'react-icons/fa'
import { HiOutlinePhoto } from 'react-icons/hi2'
import { FaChevronDown } from 'react-icons/fa'
import { GoVideo } from 'react-icons/go'
import useGlobalContext from '@/context/Context'
const Main = () => {
  const {
    setSearch,
    open,
    setOpen,
    text,
    setText,
    icon,
    setIcon,
    searchValue,
    setSearchValue,
  } = useGlobalContext()

  const handleEnterSearch = (e) => {
    if (e.key === 'Enter') {
      setSearchValue('')
      setSearch(searchValue)
    }
  }
  return (
    <div className='overflow-x-hidden'>
      <div className='bg-[url(https://c4.wallpaperflare.com/wallpaper/533/163/784/digital-digital-art-artwork-illustration-minimalism-hd-wallpaper-preview.jpg)] bg-cover h-[60vh] bg-center absolute top-0 left-0 bg-black/50 -z-10 w-full bg-blend-overlay '></div>
      <div className='w-full h-[50vh] grid place-items-center'>
        <div className='md:max-w-lg w-[85vw]  sm:max-w-sm mx-auto text-white text-center'>
          <h1 className='md:text-2xl text-xl font-bold '>
            The best free stock photos, royalty free images & videos shared by
            creators.
          </h1>
          <div className='w-full bg-white rounded-lg   p-2 mt-7'>
            <div className='flex items-center gap-1'>
              <div
                onMouseLeave={() => {
                  setTimeout(() => {
                    setOpen(false)
                  }, 5000)
                }}
                className='relative'
              >
                <h1
                  onMouseEnter={() => {
                    setOpen(true)
                  }}
                  className='flex items-center cursor-pointer group bg-gray-300 rounded-md p-2  gap-1'
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
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleEnterSearch}
              />{' '}
              <button
                onClick={() => {
                  setSearch(searchValue)
                  setSearchValue('')
                }}
                disabled={!searchValue}
                className='p-2'
              >
                {' '}
                <FaSearch className='text-lg text-gray-500  hover:text-gray-600' />
              </button>
            </div>
          </div>
        </div>{' '}
      </div>
    </div>
  )
}

export default Main
