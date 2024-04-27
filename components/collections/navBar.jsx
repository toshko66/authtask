import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


const NavBar = () => {
  return (
    <div>
      <SignedOut>
        <nav className="bg-gray-300 w-100 justify-between p-2 flex ">
          <div className=" ">
            <Link href="/" className="text-xl">
              Home
            </Link>
          </div>
          <div className="mr-2">
            <Link className='mr-2' href="sign-in">
              Sign in
            </Link>
            <Link href="sign-up">
              Sign up
            </Link>
          </div>
        </nav>
      </SignedOut>

      <SignedIn>
        <nav className="bg-gray-300 w-100 justify-between items-center p-2 flex ">
          <div className=" gap-2">
            <Link href="/" className='ml-5 text-xl'>
              Home
            </Link>
            <Link href="dashboard" className='ml-5 text-xl  '>
              Dashboard
            </Link>
          </div>
          <div className='mr-5'>
            <UserButton />
          </div>

        </nav>

      </SignedIn>
    </div>
  );
};

export default NavBar;
