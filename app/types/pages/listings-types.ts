import { Dispatch, SetStateAction } from "react";

interface FilterDrawerProps {
  toggleFilter: boolean;
  setToggleFilter: Dispatch<SetStateAction<boolean>>;
}

export default FilterDrawerProps;
