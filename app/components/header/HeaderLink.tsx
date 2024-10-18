import React, { FC } from "react";
import Link from "next/link";
import { HeaderLinkProps } from "@/app/types/header-types";

const HeaderLink: FC<HeaderLinkProps> = ({ linkKey, active, textKey }) => {
  return (
    <Link
      href={linkKey}
      className={`text-13 font-medium relative 
      ${
        active
          ? "after:absolute after:content-[''] after:w-3/4 after:h-1 after:bg-orange-400 after:top-7 after:left-0 after:right-0 after:mx-auto after:max-w-full"
          : ""
      }`}
    >
      <span
        className={`relative uppercase ${
          active
            ? `before:absolute before:content-[''] before:-top-[16px] before:left-1/2 before:h-1 before:w-2.5 before:-ml-2.5 before:bg-orange-400 before:skew-y-[150deg]
               after:absolute after:content-[''] after:-top-[16px] after:left-1/2 after:h-1 after:w-2.5 after:bg-orange-400 after:skew-y-[-150deg]`
            : ""
        }`}
      >
        {textKey}
      </span>
    </Link>
  );
};

export default HeaderLink;
