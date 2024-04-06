import { getServerSession } from 'next-auth'
import SignupForm from '../signup/SignupForm'
import Link from 'next/link'

import { redirect } from 'next/navigation'
const SignUp = async () => {
  const session = await getServerSession()
  if(session || session?.user){
    redirect('/')
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='before:bg-[url(https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1712118405~exp=1712122005~hmac=77bf6ea75e2ca39aa80fb9b054eb4c64428e835f09202d11dfda4499f363958a&w=900)]  before:absolute before:-z-10  before:top-0 before:left-0 before:bg-no-repeat before:bg-top before:h-screen h-screen before:w-full before:bg-blend-overlay  before:bg-black/30   before:bg-cover'>
        <div className=' rounded grid w-full h-full md:h-screen place-items-center max-w-2xl mx-auto'>
          <div className='p-4 pb-6 md:shadow1 rounded-md md:backdrop-blur-sm text-white'>
            <h2 className='text-3xl font-bold text-center mb-8'>Sign Up</h2>
            <SignupForm />

            <p className='text-gray-200 mt-4'>
              Do have an account?{' '}
              <Link href='/login' className='text-blue-300 hover:text-blue-500'>
                Log in here
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
