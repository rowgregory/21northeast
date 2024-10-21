import React, { Fragment } from "react";
import useCustomPathname from "../utils/useCustomPathname";
import headerLinksData from "../data/header-links-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  barsIcon,
  instaIcon,
  magnifyingGlassIcon,
  phoneIcon,
  timesIcon,
  userIcon,
} from "../icons";
import HeaderLink from "./header/HeaderLink";
import Logo from "./common/Logo";
import { logoOrangeLines } from "./common/styles";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import {
  closeNavigationDrawer,
  openKeywordModal,
  openNavigationDrawer,
} from "../redux/features/headerSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const path = useCustomPathname();
  const { navigationDrawer } = useAppSelector(
    (state: RootState) => state.header
  );
  return (
    <Fragment>
      <div className="hidden 990:block bg-[#222222] px-6 h-10">
        <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between h-full">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={userIcon}
              className="text-orange-500 w-3 h-3"
            />
            <p className="text-white text-xs">Login or Register</p>
          </div>
          <FontAwesomeIcon icon={instaIcon} className="text-white w-3 h-3" />
        </div>
      </div>
      <div
        className={`transform transition-transform duration-200 ease-in-out ${
          navigationDrawer
            ? " fixed  block h-20  w-screen  top-0  left-0  right-0  bottom-0  z-[1000]  translate-x-[280px]"
            : "sticky top-0 z-50"
        } `}
      >
        <div className="bg-white h-20 overflow-hidden px-3">
          <div className="max-w-screen-md 990:max-w-1200 mx-auto w-full flex items-center justify-between h-full">
            {!navigationDrawer && (
              <div
                onClick={() => dispatch(openNavigationDrawer())}
                className="w-16"
              >
                <FontAwesomeIcon
                  icon={barsIcon}
                  className="w-5 h-5 block 990:hidden cursor-pointer"
                />
              </div>
            )}
            {navigationDrawer && (
              <div
                onClick={() => dispatch(closeNavigationDrawer())}
                className="w-16"
              >
                <FontAwesomeIcon
                  icon={timesIcon}
                  className="w-5 h-5 block 990:hidden cursor-pointer"
                />
              </div>
            )}
            <div className={`relative ${logoOrangeLines}`}>
              <Logo width="w-48 990:w-60" />
            </div>
            {navigationDrawer && (
              <div
                onClick={() => dispatch(closeNavigationDrawer())}
                className="w-16 flex justify-end"
              >
                <FontAwesomeIcon
                  icon={timesIcon}
                  className="w-5 h-5 block  990:hidden"
                />
              </div>
            )}
            {!navigationDrawer && (
              <div
                onClick={() => dispatch(openKeywordModal())}
                className="w-16 flex justify-end"
              >
                <FontAwesomeIcon
                  icon={magnifyingGlassIcon}
                  className="w-5 h-5 block  990:hidden"
                />
              </div>
            )}
            <div className="hidden 990:flex items-center h-full w-full">
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
                className={`hidden sm:flex z-10 h-full px-10 items-center justify-center bg-orange-500 relative
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
