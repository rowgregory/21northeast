import { useEffect } from "react";

const useRemoveScroll = (keywordModal: boolean) => {
  useEffect(() => {
    if (keywordModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [keywordModal]);
};

export default useRemoveScroll;
