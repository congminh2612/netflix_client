import React from "react";
import LayoutAdmin from "@/components/admin/layouts/LayoutAdmin";
import { QueryClient, dehydrate, useQuery } from "react-query";
import { getAllUser } from "@/features/user/services/userFetch";
import { axiosInstance } from "@/services/axios.config";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const User = () => {
  const user = useSelector((state: RootState) => state.auth.currentUser);
  console.log(user);

  const { data, isSuccess } = useQuery("products", () =>
    getAllUser(user?.accessToken)
  );
  console.log(data);

  return (
    <LayoutAdmin>
      <h1>Hello</h1>
    </LayoutAdmin>
  );
};

export default User;
