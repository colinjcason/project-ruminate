import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="#E0D9E1"
      fillRule="evenodd"
      d="M3.5 10.145a.75.75 0 0 1 .75-.75h10.638l-4.158-3.96a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H4.25a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
