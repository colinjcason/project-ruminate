import React from "react";

type ButtonSize = "xs" | "sm" | "md" | "lg";
type ButtonColor = string; // Allow dynamic colors via HEX, RGB, or Tailwind class.

interface LargeSquareButtonProps {
  size?: ButtonSize; // Dynamic size: 'xs', 'sm', 'md', 'lg'
  bgColor?: ButtonColor; // Dynamic background color
  iconColor?: ButtonColor; // Dynamic icon color
  outlineColor?: ButtonColor; // Dynamic outline color
  noOutline?: boolean; // Option to remove border and shadow
  onClick?: () => void; // Click handler
  className?: string; // Additional Tailwind classes
}

const sizeStyles: Record<ButtonSize, { width: string; height: string; iconSize: string; borderRadius: string }> = {
  xs: { width: "24px", height: "24px", iconSize: "12px", borderRadius: "4px" },
  sm: { width: "32px", height: "32px", iconSize: "16px", borderRadius: "8px" },
  md: { width: "40px", height: "40px", iconSize: "18px", borderRadius: "10px" },
  lg: { width: "44px", height: "44px", iconSize: "20px", borderRadius: "12px" },
};

export const LargeSquareButton: React.FC<LargeSquareButtonProps> = ({
  size = "lg", // Default size
  bgColor = "var(--d-color-semantic-neutral-bg, #FAF5F1)", // Default background color
  iconColor = "var(--d-color-semantic-neutral-content, #222737)", // Default icon color
  outlineColor = "var(--d-color-semantic-neutral-content, #1F2739)", // Default border color
  noOutline = false, // Default border and shadow applied
  onClick,
  className,
}) => {
  const styles = sizeStyles[size];

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center flex-shrink-0 ${
        noOutline ? "" : "drop-shadow-lg"
      } ${className ?? ""}`}
      style={{
        width: styles.width,
        height: styles.height,
        borderRadius: styles.borderRadius,
        backgroundColor: bgColor,
        border: noOutline ? "none" : `2px solid ${outlineColor}`,
        boxShadow: noOutline ? "none" : "1px 2px 0px 0px #000, 1px 4px 0px 0px #000",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="none"
        style={{
          width: styles.iconSize,
          height: styles.iconSize,
          flexShrink: 0,
          fill: iconColor,
        }}
      >
        <path
          d="M9.70414 17.4255L9.6987 17.4226L9.67982 17.4124C9.66375 17.4037 9.64076 17.3911 9.61131 17.3746C9.55243 17.3418 9.4677 17.2937 9.3608 17.2308C9.14708 17.1051 8.84431 16.9199 8.48212 16.6791C7.75895 16.1984 6.79268 15.4917 5.82383 14.5886C3.90651 12.8013 1.875 10.1459 1.875 6.875C1.875 4.43495 3.928 2.5 6.40625 2.5C7.86365 2.5 9.1686 3.16591 10 4.20966C10.8314 3.16591 12.1363 2.5 13.5938 2.5C16.072 2.5 18.125 4.43495 18.125 6.875C18.125 10.1459 16.0935 12.8013 14.1762 14.5886C13.2073 15.4917 12.241 16.1984 11.5179 16.6791C11.1557 16.9199 10.8529 17.1051 10.6392 17.2308C10.5323 17.2937 10.4476 17.3418 10.3887 17.3746C10.3592 17.3911 10.3363 17.4037 10.3202 17.4124L10.3013 17.4226L10.2959 17.4255L10.2936 17.4268C10.1103 17.5241 9.88974 17.5241 9.70644 17.4268L9.70414 17.4255Z"
        />
      </svg>
    </button>
  );
};

export default LargeSquareButton;
