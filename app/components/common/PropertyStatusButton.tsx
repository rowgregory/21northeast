import React from "react";

const PropertyStatusButton = ({ text, active, onClick }: { text: string; active: boolean; onClick: any }) => {
  return (
    <div onClick={onClick} className={`${active ? 'bg-orange-500' : '' } cursor-pointer text-white font-normal p-2.5 w-fit text-sm`}>
      {text}
    </div>
  );
};

export default PropertyStatusButton;
