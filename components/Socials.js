import Link from "next/link";

import { RiGithubLine } from 'react-icons/ri';



const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-xl">
    <Link href={'https://github.com/JoJoDevAdventure?tab=overview&from=2024-10-01&to=2024-10-31'} className="hover:text-accent transition0all duration-300">
      <RiGithubLine/>
    </Link>
  </div>
  )
};

export default Socials;
