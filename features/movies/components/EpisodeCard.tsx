/* eslint-disable @next/next/no-img-element */
import { EpisodeType } from "@/types/typeMovie";
import React from "react";

interface EpisodeCardProps {
  episode: EpisodeType;
  index: number;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode, index }) => {
  return (
    <div className="flex space-y-2 cursor-pointer hover:bg-zinc-700 items-center">
      <div className="">
        <p className="text-white text-4xl font-normal pl-8 ">{index + 1}</p>
      </div>
      <div className="pl-10">
        <img
          src={episode.thumbnailUrl}
          alt=""
          className="h-[6vw] object-cover bg-no-repeat"
        />
      </div>
      <div className="text-white flex-1 pl-6 space-y-3 text-lg">
        <div className="flex space-x-40">
          <p>{episode.title}</p>
        </div>
        <p>{episode.description}</p>
      </div>
      <div className="text-white pr-8">{`${episode.duration}p`}</div>
    </div>
  );
};

export default EpisodeCard;
