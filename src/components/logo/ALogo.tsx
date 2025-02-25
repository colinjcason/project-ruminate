import React from "react";

const ALogo: React.FC<{ width?: string; height?: string; className?: string }> = ({
  width = "18.876px",
  height = "21.419px",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.0714 22.2605L9.98163 3.03909H10.791L4.62223 22.2605H0.911133L7.70659 0.841797H12.992L19.7874 22.2605H16.0714ZM4.68145 17.6207V14.2757H15.9974V17.6207H4.68145Z"
        fill="var(--d-color-base-1000, #000)"
      />
    </svg>
  );
};

export default ALogo;
