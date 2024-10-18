import React, { FC } from "react";
import { VideoProps } from "@/app/types/common-types";

const Video: FC<VideoProps> = ({ videoRef, src }) => {
  return (
    <video
      ref={videoRef}
      className="fade-in block w-full h-full object-cover absolute top-0 left-0 z-0"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
