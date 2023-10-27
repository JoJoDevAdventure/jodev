import Link from "next/link";

import { RiGithubLine, RiLinkedinLine, RiTwitterLine } from 'react-icons/ri';



const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-xl">
    <Link href={''} className="hover:text-accent transition0all duration-300">
      <RiLinkedinLine/>
    </Link>
    <Link href={''} className="hover:text-accent transition0all duration-300">
      <RiGithubLine/>
    </Link>
    <Link href={''} className="hover:text-accent transition0all duration-300">
      <RiTwitterLine/>
    </Link>
  </div>
  )
};

export default Socials;
