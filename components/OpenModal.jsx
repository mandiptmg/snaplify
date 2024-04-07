'use client'
import useGlobalContext from '@/context/Context'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Image from 'next/image'
const BasicModal = () => {
  const { isOpen, setIsOpen, selectedImage, text, selectedVideo } =
    useGlobalContext()
  const handleClose = () => setIsOpen(false)
  return (
    <div>
      <Modal
        open={isOpen}
        className='h-screen w-full grid place-items-center'
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box className='md:w-[80%] bg-black w-screen  max-w-full max-h-full h-[50vh] sm:h-[70vh]'>
          {text === 'photos' ? (
            <div className='w-full h-full relative'>
              <button
                onClick={() => window.open(selectedImage)}
                className='text-base  text-white bg-sky-500 absolute right-0 -top-10 rounded py-1 px-2 font-medium'
              >
                Free download
              </button>
              <Image
                src={selectedImage}
                width={100}
                height={100}
                className='w-full h-full object-contain  outline-none'
                alt='modal'
              />
            </div>
          ) : (
            <div className='w-full h-full relative'>
              <button
                onClick={() => window.open(selectedVideo)}
                className='text-base  text-white bg-sky-500 absolute right-0 -top-10 rounded py-1 px-2 font-medium'
              >
                Free download
              </button>
              <video
                width='320'
                height='240'
                className='h-full w-full'
                autoPlay
                controls
              >
                <source src={selectedVideo} type='video/mp4' />
                <source src={selectedVideo} type='video/ogg' />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          ;
        </Box>
      </Modal>
    </div>
  )
}

export default BasicModal
