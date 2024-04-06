// Import statements...
'use client'
import Spinner from "@/components/Spinner"
import { createContext, useContext, useEffect, useState } from "react"
import { HiOutlinePhoto } from "react-icons/hi2"

const AppContext = createContext()

export const AppProvider = ({ children}) => {
  const [search, setSearch] = useState('cat')
    const [bar, setBar] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [photos, setPhotos] = useState([])
  const [videos, setVideos] = useState([])
  const [open, setOpen] = useState(false)
   const [selectedImage, setSelectedImage] = useState(null)
   const [selectedVideo, setSelectedVideo] = useState(null)
  const [text, setText] = useState('photos')
  const [icon, setIcon] = useState(
    <HiOutlinePhoto className='text-lg text-black' />
  )

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const url = `https://pexelsdimasv1.p.rapidapi.com/v1/search?query=${search}&locale=en-US&per_page=15&page=1`
      const url1 = `https://pexelsdimasv1.p.rapidapi.com/videos/search?query=${search}&per_page=15&page=1`
      const options = {
        method: 'GET',
        headers: {
          Authorization:
            '6GmEK0bjcuQo9mJoqFoO66QYZc4ygHR6G7WzP03cC4Q21f8vxweRMnRG',
          'X-RapidAPI-Key':
            '030ca36729msh12d97486c647ffcp13d876jsn8be5417fcdfb',
          'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com',
        },
      }

      try {
        const response = await fetch(url, options)
        const response1 = await fetch(url1, options)

        const result = await response.json()
        const result1 = await response1.json()

        setPhotos(result.photos)
        setVideos(result1.videos)
        console.log(result.photos)
        console.log(result1.videos)
      } catch (error) {
        console.error(error)
        setError(error.message) // Update error state with a meaningful message
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [search])

  return (
    <AppContext.Provider
      value={{
        search,
        videos,
        setVideos,
        photos,
        setPhotos,
        setSearch,
        isOpen,
        setIsOpen,
        open,
        setOpen,
        text,
        setText,
        icon,
        setIcon,
        loading,
        error,
        bar,
        setBar,
        selectedImage,
        setSelectedImage,
        selectedVideo,
        setSelectedVideo,
      }}
    >
     <div>{children}</div>
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)
export default useGlobalContext
