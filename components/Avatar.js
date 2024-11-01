import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src={'/ava.png'}
    width={800}
    height={1200}
    alt="avatar"
    className="translate-z-0 w-full h-full"
    />
  </div>;
};

export default Avatar;
