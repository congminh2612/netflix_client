import { RootState } from "@/redux/store";
import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  if (typeof currentUser === "undefined" || currentUser === null) {
    router.push("/auth/login");
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
