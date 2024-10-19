import React, { Fragment } from "react";
import useCustomPathname from "../utils/useCustomPathname";
import headerLinksData from "../data/header-links-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { instaIcon, phoneIcon, userIcon } from "../icons";
import HeaderLink from "./header/HeaderLink";
import Logo from "./common/Logo";

const Header = () => {
  const path = useCustomPathname();

  return (
    <Fragment>
      <div>
        <div className="bg-[#222222] h-10">
          <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between h-full">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={userIcon} className="text-orange-500 w-3 h-3" />
              <p className="text-white text-xs">Login or Register</p>
            </div>
            <FontAwesomeIcon icon={instaIcon} className="text-white w-3 h-3" />
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-50">
        <div className="bg-white h-20 overflow-hidden">
          <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between h-full">
            <div
              className={`relative 
                before:absolute before:content-[''] before:bg-orange-500 before:w-1 before:h-[70px] before:-top-3.5 before:-left-2
                after:absolute after:content-[''] after:bg-orange-500 after:w-[70px] after:h-1 after:-top-2 after:-left-3.5`}
            >
              <Logo width='w-60' />
            </div>
            <div className="flex items-center h-full w-full">
              <div className="flex justify-end items-center w-full gap-6 pr-12">
                {headerLinksData(path).map(
                  ({ linkKey, active, textKey }, i) => (
                    <HeaderLink
                      key={i}
                      linkKey={linkKey}
                      active={active}
                      textKey={textKey}
                    />
                  )
                )}
              </div>
              <div
                className={`flex z-10 h-full px-10 items-center justify-center bg-orange-500 relative
                  before:absolute before:content-[''] before:right-full before:z-10 before:bottom-0 before:top-0   
                  before:border-b-orange-500 before:border-b-[80px]
                  before:border-t-transparent before:border-t-0
                  before:border-l-transparent before:border-l-[22px] 
                  
                  after:absolute after:content-[''] after:bg-orange-500 after:w-[1000%]
                  after:left-full after:h-full after:top-0 after:z-10
                  `}
              >
                <FontAwesomeIcon
                  icon={phoneIcon}
                  className="text-white w-7 h-7 rotate-[137deg]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
