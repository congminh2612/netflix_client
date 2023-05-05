import React, { PropsWithChildren } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const LayoutAdmin: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="">
      <SideBar />
      <div className="absolute top-0 right-0">
        <Navbar />
      </div>
      <div className="absolute top-[200px] xl:left-[400px] sm:left-[200px]">
        {children}
      </div>
    </div>
  );
};

export default LayoutAdmin;
