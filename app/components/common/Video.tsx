type Props = {
  videoRef: any
  src: string
}

export default function Video({ videoRef, src }: Props) {
  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover z-0"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
