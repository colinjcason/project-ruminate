import React from "react";

const ELogo: React.FC<{ width?: string; height?: string; className?: string }> = ({
  width = "13.922px",
  height = "21.419px",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.0117188 21.7166V0.297852H13.9333V3.65756H3.61919V8.9399H12.137V12.2996H3.61919V18.352H13.9333V21.7117H0.0117188V21.7166Z"
        fill="var(--d-color-base-1000, #000)"
      />
    </svg>
  );
};

export default ELogo;
