import React from "react";
import logo from "public/images/logo.png";
import Image from "next/image";
import { RxDashboard } from "react-icons/rx";
import { BiUser, BiRegistered } from "react-icons/bi";
import { MdLocalMovies } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="h-[100vh] xl:w-[400px] sm:w-[200px] bg-neutral-700">
      <div className="flex-1 pl-[60px] pt-10 xl:w-[300px] lg:w-[150px]">
        <Image src={logo} alt={"logo"} />
      </div>
      <div className="pt-20">
        <div>
          <ul className="block space-y-8">
            <li>
              <Link href="/admin">
                <div className="flex items-center xl:space-x-8 sm:space-x-4 hover:bg-neutral-800 py-4 xl:pl-10 sm:pl-4 hover:cursor-pointer">
                  <RxDashboard size={28} color="white" />
                  <p className="text-xl text-white">DashBoard</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/admin/user">
                <div className="flex items-center xl:space-x-8 sm:space-x-4 hover:bg-neutral-800 py-4 xl:pl-10 sm:pl-4 hover:cursor-pointer">
                  <BiUser size={28} color="white" />
                  <p className="text-xl text-white">User</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/admin">
                <div className="flex items-center xl:space-x-8 sm:space-x-4 hover:bg-neutral-800 py-4 xl:pl-10 sm:pl-4 hover:cursor-pointer">
                  <MdLocalMovies size={28} color="white" />
                  <p className="text-xl text-white">Movies</p>
                </div>
              </Link>
            </li>

            <li>
              <Link href="/admin">
                <div className="flex items-center xl:space-x-8 sm:space-x-4 hover:bg-neutral-800 py-4 xl:pl-10 sm:pl-4 hover:cursor-pointer">
                  <FiLogIn size={28} color="white" />
                  <p className="text-xl text-white">Login</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
