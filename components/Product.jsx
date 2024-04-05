'use client'
import Image from 'next/image'
import useGlobalContext from '@/context/Context'

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
                  onClick={() => handleImageClick(photo.src.large2x)}
                  src={photo.src.large2x}
                  width={400}
                  height={400}
                  className='cursor-pointer rounded-md object-cover'
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
                  className='cursor-pointer rounded-md object-cover'
                  alt={video.user.name}
                />
              </article>
            ))}
      </div>
    </div>
  )
}

export default Product
