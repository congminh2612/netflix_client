import React, { PropsWithChildren } from "react";

import Navbar from "./components/Navbar";
import Billboard from "./components/Billboard";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <Billboard />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
