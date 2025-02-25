import React from "react";

const RightLogo: React.FC<{ width?: string; height?: string; className?: string }> = ({
  width = "13.99px",
  height = "21.419px",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.13 18.3373H4.38837V3.67227H13.9573C14.2583 3.67227 14.8604 0.297852 14.6778 0.297852H0.72168V21.7166H14.1991C14.3817 21.7117 14.4311 18.3373 14.13 18.3373Z"
        fill="var(--d-color-base-1000, #000)"
      />
    </svg>
  );
};

export default RightLogo;
