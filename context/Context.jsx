'use client'

import { createContext, useState, useContext } from 'react'
import { HiOutlinePhoto } from 'react-icons/hi2'

const AppContext = createContext()
export const AppProvider = ({ children }) => {
  const [search, setSearch] = useState('ocean')
  const [bar, setBar] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
const [selectedImage, setSelectedImage] = useState(null)
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('photos')
  const [icon, setIcon] = useState(
    <HiOutlinePhoto className='text-lg text-black' />
  )
  return (
    <div>
      <AppContext.Provider
        value={{
          search,
          setSearch,
          bar,
          setBar,
          open,
          setOpen,
          text,
          setText,
          icon,
          setIcon,
          isOpen,
          setIsOpen,
          selectedImage, setSelectedImage
        }}

      >
        {children}
      </AppContext.Provider>
    </div>
  )
}

const useGlobalContext = () => useContext(AppContext)
export default useGlobalContext
