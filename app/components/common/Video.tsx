import React, { FC } from 'react'
import { VideoProps } from '@/app/types/common-types'

const Video: FC<VideoProps> = ({ videoRef, src }) => {
  return (
    <video
      ref={videoRef}
      className="fade-in flex w-full h-full object-cover md:absolute md:top-0 md:left-0 md:z-0"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default Video
