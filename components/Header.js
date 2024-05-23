import Image from "next/image";

import Link from "next/link";

import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-2 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-row items-center gap-y-4 py-0 lg:py-8 justify-between">
          {/* LOGO */}
          <Link href="/">
            <Image
            src={'/logo.png'}
            width={150}
            height={50}
            alt=""
            priority={true}
            />
          </Link>
          {/* SOCIALS */}
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
