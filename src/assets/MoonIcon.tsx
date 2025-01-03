import React from "react";

interface IconProps {
  size?: number;
  color?: string;
}

const MoonIcon: React.FC<IconProps> = ({ size = 32, color = "#000000" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-5 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill={color}
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Icon-Set-Filled"
          transform="translate(-575.000000, -829.000000)"
          fill={color}
        >
          <path
            d="M586.256,845 C586.256,838.1 590.735,832.236 597,829.991 C595.243,829.361 593.353,829 591.372,829 C582.33,829 575,836.164 575,845 C575,853.837 582.33,861 591.372,861 C593.353,861 595.243,860.639 597,860.009 C590.735,857.764 586.256,851.901 586.256,845"
            id="moon"
          />
        </g>
      </g>
    </svg>
  );
};

export default MoonIcon;
