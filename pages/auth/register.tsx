import React, { useEffect, useState } from "react";
import Image from "next/image";
import hero from "@/public/images/hero.jpg";
import logo from "@/public/images/logo.png";
import { ZodType, z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { ErrorMessage } from "@hookform/error-message";
import {
  Mutation,
  QueryClient,
  dehydrate,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import Button from "@/components/button/Button";

import { registerUser } from "@/features/auth/services/registerUser";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import TextInput from "@/components/input/TextInput";

interface IFormInput {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}
const Register = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  console.log(currentUser);

  const queryClient = useQueryClient();

  const router = useRouter();

  const FormRegister: ZodType<IFormInput> = z
    .object({
      email: z
        .string()
        .nonempty({ message: " Địa chỉ email không được để trống" })
        .email({ message: "Không tồn tại địa chỉ email" })
        .min(2),
      username: z
        .string()
        .nonempty({ message: " Họ và tên không được để trống" }),
      password: z
        .string()
        .nonempty({ message: " Trường này không được để trống" })
        .min(6),
      confirmPassword: z
        .string()
        .nonempty({ message: " Trường này không được để trống" })
        .min(6),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Mật khẩu không khớp",
      path: ["confirmPassword"],
    });

  const { register, handleSubmit, reset, formState } = useForm<IFormInput>({
    resolver: zodResolver(FormRegister),
  });

  const mutation: any = useMutation(registerUser, {
    onSuccess(data, variables, context) {
      console.log(data);
      toast.success("Đăng ký thành công");
      router.push("/auth/login");
    },
  });

  const onSubmit = (data: Omit<IFormInput, "confirmPassword">, e: any) => {
    e.preventDefault();
    mutation.mutate(data);
  };

  return (
    <div
      className="relative h-[100vh] 
       bg-my-bg-hero bg-cover bg-no-repeat 
    "
    >
      <div className="bg-black  h-full bg-opacity-50">
        <div className="flex justify-between pt-8 md:px-20 lg:px-40 sm:px-10">
          <div className="">
            <Image src={logo} alt={"logo"} width={200} />
          </div>
          <div>
            <Link href="/auth/login">
              <Button className="text-white px-7 py-2" text={"Đăng nhập"} />
            </Link>
          </div>
        </div>

        <div className="md:px-20 lg:px-40 sm:px-10 text-center w-full mt-20">
          <p className="text-white text-6xl font-bold ">
            Chương trình truyền hình,phim không giới hạn và nhiều nội dung khác
          </p>
          <p className="text-white text-3xl font-regular pt-10">
            Xem ở mọi lúc mọi nơi. Hủy bất kỳ lúc nào
          </p>
        </div>
        <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
        <div className="flex flex-col items-center  bg-black bg-opacity-50 pt-[60px] mt-10 h-[560px] 2xl:mx-[500px] xl:mx-[400px] lg:mx-[300px] md:mx-[200px] sm:mx-[100px]">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <TextInput
                className="xl:w-[360px] lg:w-[250px] md:w-[200px] bg-neutral-700 text-white"
                {...register("email", { required: true })}
                placeholder="Địa chỉ email"
                type="email"
                id={"email"}
              />
              <ErrorMessage
                errors={formState.errors}
                name="email"
                render={({ message }) => (
                  <p className="text-red-500">{message}</p>
                )}
              />
              {mutation.isError && mutation.error.message.includes("Email") && (
                <p className="text-red-500">{mutation.error.message}</p>
              )}
            </div>

            <div className="pt-10">
              <TextInput
                className="xl:w-[360px] lg:w-[250px] md:w-[200px] bg-neutral-700 text-white"
                {...register("username", {
                  required: "Trường này không được để trống",
                })}
                placeholder="Họ và tên"
                type="text"
                id={"username"}
              />
              <ErrorMessage
                errors={formState.errors}
                name="username"
                render={({ message }) => (
                  <p className="text-red-500">{message}</p>
                )}
              />
              {mutation.isError && mutation.error.message.includes("Tên") && (
                <p className="text-red-500">{mutation.error.message}</p>
              )}
            </div>

            <div className="pt-8">
              <TextInput
                className="xl:w-[360px] lg:w-[250px] md:w-[200px] bg-neutral-700 text-white"
                {...register("password")}
                placeholder="Mật Khẩu"
                type="password"
                id="password"
              />
              <ErrorMessage
                errors={formState.errors}
                name="password"
                render={({ message }) => (
                  <p className="text-red-500">{message}</p>
                )}
              />
            </div>
            <div className="pt-8">
              <TextInput
                className="xl:w-[360px] lg:w-[250px] md:w-[200px] bg-neutral-700 text-white"
                {...register("confirmPassword")}
                placeholder="Nhập lại mật khẩu"
                type="password"
              />
              {formState.errors.confirmPassword && (
                <span className="text-red-500">
                  {formState.errors.confirmPassword.message}
                </span>
              )}
            </div>

            <Button
              btnType="submit"
              handleClick={() => {}}
              className="px-6 py-[12px] text-white mt-10 w-full"
              text={"Đăng ký"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
