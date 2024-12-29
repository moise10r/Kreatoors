import Image from "next/image";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-2 border-b fixed w-full bg-[#fff]">
         <Image src="/logo.png" alt="Zion Reach Logo" width={200} height={60} />
         <Image src="/user.jpg" alt="Zion Reach Logo" width={200} height={200} className="w-14 rounded-full"/>
    </div>
  );
};

export default TopBar;