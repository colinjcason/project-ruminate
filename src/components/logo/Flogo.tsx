import React from "react";

const FLogo: React.FC<{ width?: string; height?: string; className?: string }> = ({
  width = "12.979px",
  height = "21.424px",
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
        d="M0.599609 21.7166V0.297852H13.5786V3.88317H4.20708V9.22437H11.7823V12.795H4.20708V21.7215H0.599609V21.7166Z"
        fill="var(--d-color-base-1000, #000)" // Allows CSS variable override
      />
    </svg>
  );
};

export default FLogo;