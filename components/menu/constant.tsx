import { MdOutlineManageAccounts } from "react-icons/md";
import { BiUser, BiHelpCircle } from "react-icons/bi";
import { optionBasic } from "./type";

export const optionsNavbarHome: optionBasic[] = [
  {
    value: "Quản lí hồ sơ",
    name: "setting",
    link: "/",
    icon: <MdOutlineManageAccounts size={24} />,
  },
  {
    value: "Tài khoản",
    name: "user",
    link: "/",
    icon: <BiUser size={24} />,
  },
  {
    value: "Trung tâm trợ giúp",
    name: "help",
    link: "/",
    icon: <BiHelpCircle size={24} />,
  },
  // {
  //   value: "Đăng xuất khỏi Netflix",
  //   name: "logout",
  //   link: "/",
  // },
];

export const optionsNavbarAdmin = [
  {
    value: "setting",
    name: "setting",
    link: "/",
  },
  {
    value: "logout",
    name: "logout",
    link: "/",
  },
];
