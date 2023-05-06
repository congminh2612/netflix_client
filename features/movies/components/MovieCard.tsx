import { MovieType } from "@/types/typeMovie";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/button/Button";
import { AiFillPlayCircle, AiOutlineLike, AiFillLike } from "react-icons/ai";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
interface MovieCardProps {
  movie: MovieType;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const router = useRouter();
  const handleClick = (id: string) => {
    router.push(`/watch/${id}`);
  };
  return (
    <div>
      <div className="h-[10vw] group col-span relative bg-zinc-900 ">
        <img
          src={movie.thumbnailUrl}
          alt="image"
          className="cursor-pointer object-cover w-full h-[8vw] transition duration round-md delay-300 
          shadow-xl group-hover:opacity-0"
        />

        <div
          className="
             shadow-lg
              opacity-0
              absolute
              top-0
              transition
              duration-200
              z-10
              delay-300
              w-full
              scale-0 
              group-hover:scale-[1.4]
              group-hover:-translate-y-[4vw]
              group-hover:translate-x-[1vw]
              group-hover:opacity-100
            "
        >
          <img
            onClick={() => handleClick(movie._id)}
            src={movie.thumbnailUrl}
            alt=""
            className="w-full h-[10vw] object-cover rounded-t-md shadow-md cursor-pointer "
          />

          <div className="w-full pb-4 bg-zinc-800 absolute shadow-lg">
            <div className="flex pt-3 px-3 items-center justify-between">
              <div className="flex items-center space-x-[6px]">
                <AiFillPlayCircle
                  size={28}
                  className="cursor-pointer hover:opacity-80"
                  onClick={() => handleClick(movie._id)}
                />
                <IoAddCircleOutline
                  size={28}
                  className="cursor-pointer hover:opacity-80"
                />
                <AiOutlineLike
                  size={28}
                  className="cursor-pointer hover:opacity-80"
                />
              </div>

              <div className="">
                <IoChevronDownCircleOutline
                  size={28}
                  className="cursor-pointer hover:opacity-80 "
                />
              </div>
            </div>

            <div className="w-full flex space-x-2 px-3 pt-4">
              <p className="text-green-500 text-sm font-bold">New</p>
              <p className="text-green-500 text-sm font-bold">
                {movie.isShown}
              </p>
              <p className="text-sm font-normal border-white border-[1px] px-[2px]">
                {movie.limit} +
              </p>
            </div>
            <div className="px-3 pt-2">
              <p className="text-sm font-light">{movie.genre}</p>
            </div>
            <div className="flex items-center space-x-2 px-3 pt-2">
              <AiFillLike color="red" size={13} />
              <p className="text-sm font-light">Được yêu thích</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
