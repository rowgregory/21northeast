import React from "react";
import Picture from "./Picture";

const Logo = ({ width }: { width: string }) => {
  return (
    <Picture
      src="/images/logo.jpg"
      alt="21 North East"
      className={`${width}`}
      priority={true}
    />
  );
};

export default Logo;
