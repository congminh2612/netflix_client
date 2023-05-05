import { Menu, Transition } from "@headlessui/react";
import React, { Ref, forwardRef, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { optionBasic } from "./type";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface propsMenuDropdown {
  options: optionBasic[];
  labelOpen?: React.ReactNode;
  label: React.ReactNode;
  classNameItem?: string;
  className?: string;
}

const MenuDropdown = (props: propsMenuDropdown) => {
  const { options, label, labelOpen, classNameItem, className } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutSide = () => {
    setIsOpen(false);
  };
  useOnClickOutside(ref, handleClickOutSide);
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button>{open ? labelOpen : label}</Menu.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items static className={twMerge("flex flex-col", className)}>
              {options.map((item) => {
                return (
                  <Menu.Item key={item.name}>
                    <Link href={item.link} className={twMerge(classNameItem)}>
                      {item.value}
                    </Link>
                  </Menu.Item>
                );
              })}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default MenuDropdown;
