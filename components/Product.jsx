'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useGlobalContext from '@/context/Context'
import BasicModal from './OpenModal'

const Product = () => {
  const [photos, setPhotos] = useState([])
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { search, text, setIsOpen, setSelectedImage } = useGlobalContext()
  // Function to handle image click
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl)
  }

  useEffect(() => {
    const fetchImages = async () => {
      const url =
        'https://pexelsdimasv1.p.rapidapi.com/v1/search?query=ocean&locale=en-US&per_page=15&page=1'
      const url1 = `https://videos.pexels.com//videos/search?query=ocean&per_page=15&page=1`
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
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [search])

  if (loading) {
    return (
      <div className='text-center text-lg text-sky-700 flex h-[40vh] justify-center items-center gap-1'>
        <div class='w-12 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#065f46_0deg,#065f46_180deg,transparent_180deg,transparent_360deg)]'>
          <span class='absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#34d399_0deg,#34d399_180deg,transparent_180deg,transparent_360deg)]'></span>
        </div>
        <span className='text-xl'> Loading...</span>
      </div>
    )
  }

  if (error) {
    return <p className='text-center  text-red-500 capitalize h-[40vh] grid place-items-center text-xl '>Error: {error}</p>
  }

  return (
    <div className='w-[90vw] pb-7 mx-auto'>
      <h1 className='text-lg mt-1 text-bold text-gray-500'>
        Free stock {text}
      </h1>
      <div className='w-full  overflow-x-hidden mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
        {text === 'photos'
          ? photos.map((photo) => (
              <article key={photo.id}>
                <Image
                  onClick={() => {
                    handleImageClick(photo.src.large2x)
                    setIsOpen(true)
                  }}
                  src={photo.src.large2x} // Assuming 'url' is not present in the response
                  width={400}
                  height={400}
                  className='w-full h-full cursor-pointer rounded-md object-cover'
                  alt={photo.alt}
                />
              </article>
            ))
          : videos.map((video) => (
              <article key={video.id} className={``}>
                {/* <iframe src={video.url}>browser not support</iframe> */}

                <Image
                  src={video.image} // Assuming 'url' is not present in the response
                  width={400}
                  height={400}
                  className='w-full h-full cursor-pointer rounded-md object-cover'
                  alt={video.user.name}
                  onClick={() => {
                    handleImageClick(video.video_files[0].link)
                    setIsOpen(true)
                  }}
                />
              </article>
            ))}
      </div>
    </div>
  )
}

export default Product
