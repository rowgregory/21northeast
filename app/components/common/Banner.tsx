"use client";

import React, { FC } from "react";
import useVideo from "@/app/hooks/useVideo";
import Video from "./Video";
import { BannerProps } from "@/app/types/common-types";

const Banner: FC<BannerProps> = ({ src, s1, s2, s3 }) => {
  const { videoRef } = useVideo();

  return (
    <div className="relative w-full h-[450px] lg:h-[750px]">
      <Video videoRef={videoRef} src={src} />
      <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col w-full h-full flex justify-center bg-black/50">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col">
          <div className="slide-down text-white">{s1}</div>
          <div className="scale-ine text-white">{s2}</div>
          <div className="slide-up">{s3}</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
