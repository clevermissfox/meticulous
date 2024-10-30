import { useState } from "react";
import BtnIcon from "./BtnIcon";
export default function ExpandedBtnIcon({
  label,
  btnClass,
  iconWeight = "fas",
  iconSize = "fa-sm",
  iconClass,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div
      className={`expanded-btn-wrapper ${
        isExpanded ? "expanded-btn_expanded" : ""
      }`}
    >
      {isExpanded && children}
      <BtnIcon
        onClick={handleClick}
        label={label}
        btnClass={btnClass}
        iconWeight={iconWeight}
        iconSize={iconSize}
        iconClass={iconClass}
      />
    </div>
  );
}
