import Image from "next/image";
import React, { useState, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import avatar from "public/images/avatar1.jpg";
import { useOnClickOutside } from "usehooks-ts";
import TextInput from "@/components/input/TextInput";
import MenuDropdown from "@/components/menu/MenuDropdown";
import { optionsNavbarAdmin } from "@/components/menu/constant";

const Navbar = () => {
  return (
    <div className="flex items-center justify-end pt-[40px] pb-[100px] w-full">
      <div className="relative pl-[100px] pr-[100px]">
        <TextInput
          placeholder="Search"
          className="bg-gray-200 text-neutral-500"
        />
        <IoSearch
          size={28}
          className="absolute top-[9px] left-[350px]"
          color="#737373"
        />
      </div>
      <div className="relative inline-block text-left ">
        <MenuDropdown
          options={optionsNavbarAdmin}
          label={
            <p className="inline-flex justify-center w-full rounded-md cursor-pointer text-gray-700 px-4 py-2 text-lg font-medium hover:opacity-90  ">
              Trần Công Minh
            </p>
          }
          classNameItem="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-200 hover:text-gray-900"
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        />
      </div>
      <div className="pr-[100px]">
        <Image
          src={avatar}
          alt={"avatar"}
          width={40}
          height={35}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
