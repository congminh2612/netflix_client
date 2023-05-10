/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { closeModal, openModal } from "./state/ModalSlice";
import { IoIosCloseCircle } from "react-icons/io";
import Button from "../button/Button";
import { IoAddCircleOutline, IoPlay } from "react-icons/io5";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { useQuery } from "react-query";
import { getMovieById } from "@/features/movies/services/getMovieById";
import EpisodeCard from "@/features/movies/components/EpisodeCard";

const ModalMovie = () => {
  const movie = useSelector((state: RootState) => state.modal.infoModal);
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[60]"
          onClose={() => dispatch(closeModal())}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-100000">
            <div className="flex  items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-5xl pb-10 transform overflow-y-auto rounded-2xl bg-zinc-800  text-left align-middle shadow-xl transition-all">
                  <div className="relative">
                    <div className="">
                      <img
                        src={movie?.thumbnailUrl}
                        alt=""
                        className=" w-full bg-zinc-800 brightness-75"
                      />
                      <IoIosCloseCircle
                        size="32"
                        className="absolute top-0 right-0 cursor-pointer hover:opacity-80"
                        color="white"
                        onClick={() => dispatch(closeModal())}
                      />
                    </div>
                    <div className="flex absolute bottom-10 left-10 items-center space-x-4">
                      <div className="relative">
                        <Button
                          text={"Phát"}
                          className="bg-white hover:bg-gray-200 py-2 pl-[50px] pr-6 font-medium text-lg"
                        />
                        <IoPlay
                          className="absolute top-[8px] left-[10px]"
                          size={28}
                        />
                      </div>
                      <IoAddCircleOutline
                        size={36}
                        color="white"
                        className="cursor-pointer hover:opacity-80"
                      />
                      <AiOutlineLike
                        size={36}
                        color="white"
                        className="cursor-pointer hover:opacity-80"
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <div className="px-4 space-y-2 flex-1">
                      <div className="w-full flex space-x-2  pt-4">
                        <p className="text-green-500 text-base font-bold">
                          New
                        </p>
                        <p className="text-green-500 text-base font-bold">
                          {movie?.isShown}
                        </p>
                        <p className="text-sm font-normal border-white border-[1px] px-[2px] text-white">
                          {movie?.limit} +
                        </p>
                      </div>

                      <div className="flex items-center space-x-2  pt-2">
                        <AiFillLike color="red" size={13} />
                        <p className="text-lg font-normal text-white">
                          Được yêu thích
                        </p>
                      </div>

                      <div className="text-lg font-normal text-white max-w-xl">
                        <p>{movie?.description}</p>
                      </div>
                    </div>
                    <div className="pr-4 pt-6 space-y-2">
                      <div className="flex items-center space-x-2">
                        <p className="text-gray-400 text-sm font-normal">
                          Diễn viên :
                        </p>
                        <p className="text-white ">
                          Trần Công Minh ,Lưu Thị Thanh Thùy
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <p className="text-gray-400 text-sm font-normal">
                          Đạo diễn :
                        </p>
                        <p className="text-white ">Minh Mong Manh</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <p className="text-gray-400 text-sm font-normal">
                          Thể loại :
                        </p>
                        <p className="text-white ">{movie?.genre}</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-white flex justify-between pt-8">
                    <p className="text-2xl pl-6">Tập</p>
                    <p className="text-xl pr-10">{movie?.title}</p>
                  </div>

                  <div className="pt-8">
                    {movie?.episodes.map((episode, index) => {
                      return (
                        <EpisodeCard
                          key={episode._id}
                          episode={episode}
                          index={index}
                        />
                      );
                    })}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalMovie;
