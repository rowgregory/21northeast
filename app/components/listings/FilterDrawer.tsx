import { FC, Fragment, useCallback, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useOutsideDetect from "../../hooks/useOutsideDetect";
import { timesIcon } from "../../icons";
import PropertySearchForm from "../../forms/PropertySearchForm";
import BlackPageOverlay from "../common/BlackPageOverlay";
import OrangeForSaleBox from "../common/OrangeForSaleBox";
import FilterDrawerProps from "@/app/types/pages/listings-types";

const FilterDrawer: FC<FilterDrawerProps> = ({ toggleFilter, setToggleFilter }) => {
  const overlayRef = useRef(null);
  const handleClose = useCallback(() => setToggleFilter(false), []);
  useOutsideDetect(overlayRef, handleClose);

  return (
    <Fragment>
      <BlackPageOverlay open={toggleFilter} />
      <div
        ref={overlayRef}
        className={`${
          toggleFilter
            ? "left-0 w-screen sm:w-[300px]"
            : `left-[-135vw] w-screen sm:w-[300px] sm:left-[-300px]`
        } px-8 py-6 overflow-y-auto h-screen fixed z-[60] top-0 bottom:0 transition-all duration-300 bg-white`}
      >
        <div className="mb-7 flex items-center justify-end">
          <FontAwesomeIcon
            onClick={handleClose}
            icon={timesIcon}
            className="w-3 h-3 text-zinc-800 cursor-pointer"
          />
        </div>
        <div className="bg-[#f8f8f8] p-2.5">
          <div className="w-full bg-black mb-7">
            <OrangeForSaleBox />
          </div>
          <PropertySearchForm type="listings" />
        </div>
      </div>
    </Fragment>
  );
};

export default FilterDrawer;
