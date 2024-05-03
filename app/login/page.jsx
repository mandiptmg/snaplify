import Link from 'next/link'
import SignInForm from './SignInForm'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import AuthButton from './AuthButton'

const Login = async () => {
  const session = await getServerSession()

  if (session || session?.user) {
    redirect('/')
  }

  return (
    <div className='flex items-center relative justify-center h-screen'>
      <div className='bg-[url(https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1712118405~exp=1712122005~hmac=77bf6ea75e2ca39aa80fb9b054eb4c64428e835f09202d11dfda4499f363958a&w=900)]  absolute  top-0 left-0 bg-no-repeat bg-top h-screen w-full bg-blend-overlay  bg-black/30   bg-cover'>
        <div className='rounded grid w-full h-screen md:backdrop-blur-none backdrop-blur-sm  place-items-center  mx-auto'>
          <div className='p-6 pb-6 w-[22rem] bg-black/50 md:shadow1 rounded-md  text-white '>
            <h2 className='text-3xl font-bold text-center mb-8'>Log In</h2>
            <SignInForm />
            <p className='text-gray-200  mt-4  '>
              Don&apos;t have an account?{' '}
              <Link
                href='/signup'
                className='text-blue-300 hover:text-blue-500'
              >
                Sign up here
              </Link>
            </p>{' '}
            <div className='relative pt-4'>
              <h1 className='text-white p-[2px] backdrop-blur-sm bg-transparent z-50 text-base  text-center '>
                or with in
              </h1>
            </div>
            <AuthButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
