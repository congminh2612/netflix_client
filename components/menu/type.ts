import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { MdOutlineManageAccounts } from "react-icons/md";

export interface optionBasic {
  value: string;
  name: string;
  link: string;
  icon?: JSX.Element;
}
