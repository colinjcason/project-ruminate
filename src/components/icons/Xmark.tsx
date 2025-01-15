import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      fill="#222737"
      d="M4.396 3.654a.525.525 0 1 0-.742.742L6.258 7 3.654 9.604a.525.525 0 1 0 .742.742L7 7.742l2.604 2.604a.525.525 0 1 0 .742-.742L7.742 7l2.604-2.604a.525.525 0 1 0-.742-.742L7 6.258 4.396 3.654Z"
      style={{
        fill: "#222737",
        fillOpacity: 1,
      }}
    />
  </svg>
);
export default SvgComponent;
