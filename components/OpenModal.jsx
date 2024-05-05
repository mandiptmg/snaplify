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
        <Box className='md:w-[80%] overflow-hidden bg-black w-screen relative  max-w-full max-h-full h-[50vh] sm:h-[70vh]'>
          <a
            href={selectedImage}
            className='text-base text-white bg-sky-500 absolute right-0 -top-30 rounded py-1 px-2 font-medium'
            download='customFileName jpg' // Custom file name for downloading
          >
            Free download
          </a>
          {text === 'photos' ? (
            <div className='w-full grid place-items-center h-full '>
              <Image
                src={selectedImage}
                width={400}
                height={400}
                className='object-contain as md:w-[500] md:scale-105 md:h-[500] outline-none'
                alt='modal'
              />
            </div>
          ) : (
            <div className='w-full h-full relative'>
              {/* <button
                onClick={() => window.open(selectedVideo)}
                className='text-base  text-white bg-sky-500 absolute right-0 -top-10 rounded py-1 px-2 font-medium'
              >
                Free download
              </button> */}
              <iframe
                width={'100%'}
                height={'100%'}
                src={selectedVideo}
                autoPlay
                controls
                loading='lazy'
              ></iframe>
            </div>
          )}
          ;
        </Box>
      </Modal>
    </div>
  )
}

export default BasicModal
