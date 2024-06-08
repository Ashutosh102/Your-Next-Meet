import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';
// import Script from 'next/script';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <>
      {/* <Script
        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
        type="module"
      /> */}
      <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={32}
            height={32}
            alt="logo"
            className="max-sm:size-10"
          />
          <p className="text-[26px] font-extrabold text-white max-sm:hidden">
            NextMeet
          </p>
          {/* <dotlottie-player
            src="https://lottie.host/49fa5f86-760a-4e4e-a1f1-a1bc97358eff/2ee2HE3YjQ.json"
            background="transparent"
            speed="1"
            style={{ width: '500', height: '500' }}
            loop
            autoplay
           
          ></dotlottie-player> */}
        </Link>
        <div className="flex-between gap-5">
          <SignedIn>
            <UserButton afterSignOutUrl="/sign-in" />
          </SignedIn>

          <MobileNav />
        </div>
       
      </nav>
    </>
  );
};

export default Navbar;
