import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

interface AwesomeIconProps {
  icon: IconDefinition;
  className: string;
}

const AwesomeIcon: FC<AwesomeIconProps> = ({ icon, className }) => {
  return <FontAwesomeIcon icon={icon} className={className} />;
};

export default AwesomeIcon;
