import { LegacyRef, ReactNode } from "react";

interface VideoProps {
  videoRef: LegacyRef<HTMLVideoElement>;
  src: string;
}

interface BannerProps {
  src: string;
  title: string;
  breadcrumb: string;
}

interface ChildrenProps {
  children: ReactNode;
}

export type { VideoProps, BannerProps, ChildrenProps };
