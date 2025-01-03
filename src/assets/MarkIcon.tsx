import React from 'react';

interface SVGProps {
  size?: number;
  color?: string;
}

const MarkIcon: React.FC<SVGProps> = ({ size = 24, color = "#000000" }) => {
  return (
    <svg
      className='mark-icon'
      fill={color}
      height={size}
      width={size}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 406.834 406.834"
      xmlSpace="preserve"
    >
      <polygon points="385.621,62.507 146.225,301.901 21.213,176.891 0,198.104 146.225,344.327 406.834,83.72 " />
    </svg>
  );
};

export default MarkIcon;
