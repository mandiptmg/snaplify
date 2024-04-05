'use client'

import { createContext, useState, useContext, useEffect } from 'react'
import { HiOutlinePhoto } from 'react-icons/hi2'

const AppContext = createContext()
export const AppProvider = ({ children }) => {
  const [search, setSearch] = useState('cat')
  const [bar, setBar] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [photos, setPhotos] = useState([])
  const [videos, setVideos] = useState([])
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('photos')
  const [icon, setIcon] = useState(
    <HiOutlinePhoto className='text-lg text-black' />
  )
  useEffect(() => {
    const fetchPexel = async () => {
      const urlImage = `https://pexelsdimasv1.p.rapidapi.com/v1/search?query=${search}&locale=en-US&per_page=15&page=1`
      const urlVideo = `https://pexelsdimasv1.p.rapidapi.com/videos/search?query=${search}&per_page=15&page=1`

      const options = {
        method: 'GET',
        headers: {
          Authorization: process.env.PEXELS_API_KEY,
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com',
        },
      }

      try {
        const responseImage = await fetch(urlImage, options)
        const responseVideo = await fetch(urlVideo, options)
        const resultImage = await responseImage.json()
        const resultVideo = await responseVideo.json()
        setLoading(true)
        setPhotos(resultImage.photos)
        setVideos(resultVideo.videos)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    fetchPexel()
  }, [search])
  return (
    <div>
      <AppContext.Provider
        value={{
          search,
          videos,
          setVideos,
          photos,
          setPhotos,
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
          selectedImage,
          setSelectedImage,
          selectedVideo,
          setSelectedVideo,
          loading,
          setLoading,
          error,
          setError,
        }}
      >
        {children}
      </AppContext.Provider>
    </div>
  )
}

const useGlobalContext = () => useContext(AppContext)
export default useGlobalContext
