import React from "react";

interface IconProps {
    size?: number;
    color?: string;
}

const PlusIcon: React.FC<IconProps> = ({ size = 32, color = "#000000" }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 12H20M12 4V20"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default PlusIcon;
