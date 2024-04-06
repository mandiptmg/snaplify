'use client'
import Image from 'next/image'
import useGlobalContext from '@/context/Context'
import Spinner from './Spinner'

const Product = () => {
  const {
    loading,
    error,
    text,
    setIsOpen,
    setSelectedImage,
    setSelectedVideo,
    photos,
    videos,
  } = useGlobalContext()

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl)
    setIsOpen(true)
  }

  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl)
    setIsOpen(true)
  }

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return (
      <p className='text-center  text-red-500 capitalize h-[40vh] grid place-items-center text-xl '>
        Error: {error}
      </p>
    )
  }

  return (
    <div className='w-[90vw] pb-7 mx-auto'>
      <h1 className='text-lg mt-1 font-bold text-gray-500'>
        Free stock {text}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
        {text === 'photos'
          ? photos.map((photo) => (
              <article key={photo.id}>
                <Image
                  onClick={() => handleImageClick(photo.src.medium)}
                  src={photo.src.large2x}
                  width={400}
                  height={400}
                  className='cursor-pointer h-auto w-auto aspect-square rounded-md object-cover'
                  alt={photo.alt}
                />
              </article>
            ))
          : videos.map((video) => (
              <article key={video.id}>
                <Image
                  onClick={() => handleVideoClick(video.video_files[0].link)}
                  src={video.image}
                  width={400}
                  height={400}
                  className='cursor-pointer h-auto w-auto aspect-square  rounded-md object-cover'
                  alt={video.user.name}
                />
              </article>
            ))}
      </div>
    </div>
  )
}

export default Product
