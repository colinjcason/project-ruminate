import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="black"
    overflow="visible"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="#C1E2DF"
        d="M140 37.145H60c-6.075 0-11 4.925-11 11v104c0 6.075 4.925 11 11 11h80c6.075 0 11-4.925 11-11v-104c0-6.075-4.925-11-11-11Z"
      />
      <path
        fill="#000"
        d="M140 38.145c5.51 0 10 4.49 10 10v104c0 5.51-4.49 10-10 10H60c-5.51 0-10-4.49-10-10v-104c0-5.51 4.49-10 10-10h80Zm0-2H60c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h80c6.6 0 12-5.4 12-12v-104c0-6.6-5.4-12-12-12Z"
      />
      <path
        fill="#86B8C8"
        d="M68.41 144.255a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM68.41 119.255a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM68.41 94.255a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM68.41 69.255a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M83.59 135.545h57"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m63.91 136.245 2.1 2.76 6.9-7.5"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M83.59 110.545h57"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m63.91 111.245 2.1 2.76 6.9-7.5"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M83.59 85.545h57"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m63.91 86.245 2.1 2.76 6.9-7.5"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M83.59 60.545h57"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m63.91 61.245 2.1 2.76 6.9-7.5"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={110}
        height={134}
        x={42}
        y={36.145}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-6} dy={6} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_12336_25771"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_12336_25771"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgComponent;
