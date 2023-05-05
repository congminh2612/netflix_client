import Button from "@/components/button/Button";
import { getMovieBillBoard } from "@/features/movies/services/getMovieBillboard";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { IoPlay } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiSpeakerXMark, HiSpeakerWave } from "react-icons/hi2";
import { log } from "console";

const Billboard = () => {
  const { data, isError } = useQuery("random", getMovieBillBoard, {
    cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
    staleTime: 1000 * 60 * 1, // Use stale data for 1 minute
    refetchInterval: 1000 * 60 * 2, // Refetch data every 2 minutes
  });

  return (
    <div className="h-[39vw] relative">
      <video
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
        muted
        autoPlay
        className="w-full object-cover brightness-[60%] h-[39vw]"
      ></video>

      <div className="absolute top-[25%] md:top-[30%] ml-4 md:ml-16">
        <p className="text-white text-xl md:text-5xl w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-90% md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {data?.description}
        </p>
        <div className="flex space-x-6 pt-10">
          <div className="relative">
            <Button
              text={"Phát"}
              className="bg-white hover:bg-gray-200 py-2 pl-[50px] pr-6 font-medium text-lg"
            />
            <IoPlay className="absolute top-[8px] left-[10px]" size={28} />
          </div>
          <div className="relative">
            <Button
              text={"Thông tin khác"}
              className="bg-neutral-800 hover:bg-neutral-800 hover:bg-opacity-95 bg-opacity-60 text-white py-2 pl-[50px]  xl:pr-6 md:pr-3 xl:text-lg  md:text-base"
            />
            <AiOutlineInfoCircle
              className="absolute top-[8px] left-[10px]"
              size={28}
              color="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
