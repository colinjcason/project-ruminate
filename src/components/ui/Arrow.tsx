import React from "react";

type ArrowProps = {
  isOpen: boolean;
};

const ArrowIcon: React.FC<ArrowProps> = ({ isOpen }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4.76172L17.0711 11.8328L15.1724 13.7315L10 8.55907L4.82761 13.7315L2.92893 11.8328L10 4.76172Z"
        fill="#DEF7EA"
      />
    </svg>
  );
};

export default ArrowIcon;
