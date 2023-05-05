import React, { useState, useEffect, useRef } from "react";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import avatar from "@/public/images/avatar-home.png";
import MenuDropdown from "@/components/menu/MenuDropdown";
import { optionsNavbarHome } from "@/components/menu/constant";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import TextInput from "@/components/input/TextInput";
import { navbarLinks } from "../constants/navbarLink";
import { useOnClickOutside } from "usehooks-ts";

const Navbar = () => {
  const [showBackground, setShowBackground] = useState<boolean>();
  const [showInput, setShowInput] = useState<boolean>(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setShowInput(!showInput);
  };

  useOnClickOutside(ref, () => {
    setShowInput(false);
  });

  return (
    <nav className="fixed w-full z-50">
      <div
        className={`flex ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        } items-center pt-4 px-4 lg:px-8 xl:px-12 pb-6  transition-all`}
      >
        <div className="w-[50px] md:w-[80px] lg:w-[80px] xl:w-[100px] 2xl:w-[120px]">
          <Image src={logo} alt="logo" width={150} />
        </div>

        <div
          className="flex flex-1 pl-[20px] md:pl-[40px] space-x-[4px]
         lg:space-x-[8px] xl:space-x-[16px] items-center"
        >
          {navbarLinks.map((link) => {
            return (
              <Link href="/" key={link.id}>
                <p
                  className="2xl:text-sm  text-xs font-light 2xl:font-normal lg:font-light 
                 text-gray-200 hover:text-gray-400"
                >
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center flex-1 justify-end space-x-6 z-100">
          <div className="group relative">
            {showInput && (
              <TextInput
                ref={ref}
                placeholder={"Nhập tên phim, diễn viên..."}
                className="hover:border-gray-400 border-gray-400  border-2 w-[100px] lg:w-[160px] xl:w-[260px] pl-[40px] 
                 bg-zinc-900 bg-opacity-50 outline-none focus:outline-none  text-white py-2 transition-all"
              />
            )}
            <div ref={ref}>
              <AiOutlineSearch
                onClick={handleClick}
                color="#e5e5e5"
                size={26}
                className={`absolute ${
                  showInput ? "top-[10px] left-1" : " top-[-10px] right-[-8px]"
                } `}
              />
            </div>
          </div>
          <div>
            <p className="2xl:text-lg lg:text-base md:text-sm text-xs text-gray-200">
              Trẻ em
            </p>
          </div>
          <div>
            <IoMdNotificationsOutline
              color="#e5e5e5"
              size={30}
              className="lg:w-7 w-5"
            />
          </div>

          <div className="relative pt-1">
            <MenuDropdown
              options={optionsNavbarHome}
              label={
                <div className="flex items-center space-x-2 ">
                  <div>
                    <Image src={avatar} alt="avatar" width={34} />
                  </div>
                  <BiDownArrow color="#e5e5e5" size={12} className="pt-2px" />
                </div>
              }
              labelOpen={
                <div className="flex items-center space-x-2">
                  <div>
                    <Image src={avatar} alt="avatar" width={34} />
                  </div>
                  <BiUpArrow color="#e5e5e5" size={12} />
                </div>
              }
              classNameItem="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
