'use client'
// import Spinner from '@/components/Spinner'
import { createContext, useContext, useEffect, useState } from 'react'
import { HiOutlinePhoto } from 'react-icons/hi2'
import axios from 'axios'
const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [search, setSearch] = useState('cat')
  const [bar, setBar] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [photos, setPhotos] = useState([])
  // const [videos, setVideos] = useState([])
  const [searchValue, setSearchValue] = useState('')

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
      const imageUrl =
        `https://api.unsplash.com/search/photos?page=3&query=${search}&client_id=5AnUxvk_GPhC-GgUKip30mMU5sMAYnwVVEqgUaNx3s4`
      // const videoOptions = {
      //   method: 'POST',
      //   url: 'https://google-api31.p.rapidapi.com/videosearch',
      //   headers: {
      //     'content-type': 'application/json',
      //     'X-RapidAPI-Key':
      //       '030ca36729msh12d97486c647ffcp13d876jsn8be5417fcdfb',
      //     'X-RapidAPI-Host': 'google-api31.p.rapidapi.com',
      //   },
      //   data: {
      //     text: search,
      //     safesearch: 'off',
      //     timelimit: '',
      //     duration: '',
      //     resolution: '',
      //     region: 'wt-wt',
      //     max_results: 50,
      //   },
      // }

      try {
        const imageResponse = await axios.request(imageUrl)
        // const videoResponse = await axios.request(videoOptions)
        console.log(imageResponse.data.results)
        setPhotos(imageResponse.data.results)
        // console.log(videoResponse.data)
        // setVideos(videoResponse.data.result)
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
        // videos,
        // setVideos,
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
        searchValue,
        setSearchValue,
      }}
    >
      <div>{children}</div>
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)
export default useGlobalContext
