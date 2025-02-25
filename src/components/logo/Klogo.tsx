import React from "react";

const KLogo: React.FC<{ width?: string; height?: string; className?: string }> = ({
  width = "17.277px",
  height = "21.419px",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.8544 22.2605V12.2648L4.76911 22.2605H0.189453L10.0841 11.3427L0.82113 0.841797H5.25275L13.8594 10.7787V0.841797H17.4668V22.2605H13.8544Z"
        fill="var(--d-color-base-1000, #000)"
      />
    </svg>
  );
};

export default KLogo;
