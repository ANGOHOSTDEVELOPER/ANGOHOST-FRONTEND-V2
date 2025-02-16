import Image from "next/image";
import logo from '@/assets/images/ANGOHOST-03.png'
import { Menu } from "./menu";

export default function Navbar() {
  return (
    <>
      <nav className="w-full px-[80px] py-[20px]  ">
        <div className="w-full flex items-center justify-between bg-black  p-5 rounded-lg bg-opacity-10">
            <div>
                <Image className="w-[170px]" src={logo} alt="logo"/>
            </div>
            <Menu/>
        </div>
      </nav>
    </>
  );
}
