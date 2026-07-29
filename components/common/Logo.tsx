import React from "react";
import Picture from "./Picture";

const Logo = ({ width, src }: { width: string; src?: string }) => {
  return (
    <Picture
      src={`${src ? src : "/images/logo.jpg"}`}
      alt="21 North East"
      className={`${width}`}
      priority={true}
    />
  );
};

export default Logo;
