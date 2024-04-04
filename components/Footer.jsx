import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  const time = new Date().getFullYear()
  return (
    <div className='h-24 w-full p-10 bg-sky-400/50 '>
      <div className='flex gap-2 items-center justify-between'>
        <Link href='/' className='inline-flex items-center gap-3'>
          {' '}
          <Image
            src={'/logo.png'}
            width={100}
            height={100}
            className='w-12 h-12 aspect-square object-contain'
            alt='logo'
          />
          <h1 className='text-xl hidden md:block font-bold text-gray-600'>Snaplify</h1>
        </Link>
        <h1 className='text-sm text-gray-600'>
          &copy; {time} Snaplify All rights reserved created by{' '}
          <span className='text-thin font-[cursive]'>mandip tamang</span>
        </h1>
      </div>
    </div>
  )
}

export default Footer
