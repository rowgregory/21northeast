import { LegacyRef, ReactNode } from "react";

interface VideoProps {
  videoRef: LegacyRef<HTMLVideoElement>;
  src: string;
}

interface BannerProps {
  src: string;
  s1?: ReactNode;
  s2?: ReactNode;
  s3?: ReactNode;
}

export type { VideoProps, BannerProps };
