import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { ZodType, z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useMutation } from "react-query";
import { loginUser } from "@/features/auth/services/loginUser";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/redux/store";
import { loginSuccess } from "@/features/auth/authSlice";
import TextInput from "@/components/input/TextInput";
import Button from "@/components/button/Button";
import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@/services/firebase";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

interface IFormLogin {
  email: string;
  password: string;
}

const Login = () => {
  const signWithFB = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const user = await signInWithPopup(auth, provider);
      console.log(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  const signWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const user = await signInWithPopup(auth, provider);
      console.log(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch = useDispatch();

  const FormLogin: ZodType<IFormLogin> = z.object({
    email: z.string().email({ message: "Địa chỉ email không hợp lệ" }),
    password: z.string().min(6),
  });
  const router = useRouter();
  const mutation = useMutation(loginUser, {
    onSuccess(data, variables, context) {
      dispatch(loginSuccess(data));
      console.log(data);
      router.push("/admin/user");
    },
    onError(error, variables, context) {
      toast.error("Tài khoản hoặc mật khẩu không chính xác");
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormLogin>({ resolver: zodResolver(FormLogin) });
  const onSubmit = (data: IFormLogin) => mutation.mutate(data);
  return (
    <div
      className="relative h-[100vh] 
           bg-my-bg-hero bg-cover bg-no-repeat 
        "
    >
      <div className="bg-black  h-full bg-opacity-50">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex justify-between pt-8 md:px-20 lg:px-40 sm:px-10">
          <div className="">
            <Image src={logo} alt={"logo"} width={300} />
          </div>
        </div>

        <div className="flex flex-col items-center  bg-black bg-opacity-50 pt-[120px]  xl:mx-[400px] lg:mx-[300px] sm:mx-[200px] mt-20 h-[600px]">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <TextInput
                className="xl:w-[400px] sm:w-[300px] py-4 bg-neutral-700 text-white"
                {...register("email")}
                placeholder="Địa chỉ email"
                type="email"
                id={"email"}
              />
              {errors.email && (
                <span className="text-red-700">{errors.email.message}</span>
              )}
            </div>

            <div className="pt-10">
              <TextInput
                className="xl:w-[400px]  sm:w-[300px] py-4 bg-neutral-700 text-white"
                {...register("password")}
                placeholder="Mật Khẩu"
                type="password"
                id="password"
              />
            </div>

            <div>
              <Button
                btnType="submit"
                handleClick={() => {}}
                className="px-6 py-4 text-white xl:w-[400px] sm:w-[300px] mt-[50px]"
                text={"Đăng Nhập"}
              />
            </div>

            <div className="flex w-full h-full text-white mt-10 xl:text-2xl  sm:text-lg text-center ">
              <p>Bạn mới gia nhập Netflix?</p>
              <Link
                className="xl:text-2xl  sm:text-lg font-bold hover:opacity-80 pl-2"
                href={"/auth/register"}
              >
                Đăng ký ngay
              </Link>
            </div>
          </form>

          <div className="flex space-x-8 pt-4">
            <div className="relative">
              <Button
                handleClick={() => signWithFB()}
                text={"Đăng nhập với Facebook"}
                className="pl-10 pr-3 py-2 bg-blue-500 hover:bg-blue-400 text-white font-medium"
              />
              <BsFacebook
                color="white"
                size="24"
                className="absolute top-[7px] left-[5px] "
              />
            </div>
            <div className="relative">
              <Button
                handleClick={() => signWithGoogle()}
                text={"Đăng nhập với Google"}
                className="py-2 pl-10 pr-3 bg-white hover:bg-gray-200 font-medium"
              />
              <FcGoogle className="absolute top-[7px] left-[5px] " size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
