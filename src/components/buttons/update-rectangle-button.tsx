import React from "react";

type ButtonSize = "xs" | "sm" | "md" | "lg";
type ButtonColor = string; // Allow dynamic colors via HEX, RGB, or Tailwind class.

interface DynamicButtonProps {
  label: string; // Button text
  size?: ButtonSize; // Button size: 'xs', 'sm', 'md', 'lg'
  bgColor?: ButtonColor; // Dynamic background color
  textColor?: ButtonColor; // Dynamic text color
  iconColor?: ButtonColor; // Dynamic icon color
  outlineColor?: ButtonColor; // Dynamic outline color (border)
  noOutline?: boolean; // Removes border and drop shadow if true
  onClick?: () => void; // Click handler
  className?: string; // Additional classes
}

const sizeStyles: Record<ButtonSize, { height: string; padding: string; borderRadius: string; iconSize: string }> = {
  xs: { height: "24px", padding: "0px 8px", borderRadius: "4px", iconSize: "14px" },
  sm: { height: "32px", padding: "0px 12px", borderRadius: "10px", iconSize: "14px" },
  md: { height: "36px", padding: "0px 16px", borderRadius: "12px", iconSize: "16px" },
  lg: { height: "44px", padding: "0px 16px", borderRadius: "12px", iconSize: "20px" },
};

const fontStyles: Record<ButtonSize, { fontSize: string; lineHeight: string; fontWeight: string }> = {
  xs: { fontSize: "14px", lineHeight: "20px", fontWeight: "700" },
  sm: { fontSize: "16px", lineHeight: "24px", fontWeight: "700" },
  md: { fontSize: "16px", lineHeight: "24px", fontWeight: "700" },
  lg: { fontSize: "18px", lineHeight: "28px", fontWeight: "700" },
};

export const DynamicRectangleButton: React.FC<DynamicButtonProps> = ({
  label,
  size = "md", // Default size
  bgColor = "#92004C", // Default background color
  textColor = "#FFC6BC", // Default text color
  iconColor = "#FFC6BC", // Default icon color
  outlineColor = "#1F2739", // Default outline color
  noOutline = false, // By default, border and shadow are applied
  onClick,
  className,
}) => {
  const styles = sizeStyles[size];
  const font = fontStyles[size];

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 flex-shrink-0 ${
        noOutline ? "" : "drop-shadow-lg"
      } ${className ?? ""}`}
      style={{
        height: styles.height,
        padding: styles.padding,
        borderRadius: styles.borderRadius,
        backgroundColor: bgColor,
        color: textColor,
        border: noOutline ? "none" : `2px solid ${outlineColor}`,
        boxShadow: noOutline ? "none" : "1px 2px 0px 0px #000, 1px 4px 0px 0px #000",
        fontFamily: `"Roboto Flex", sans-serif`,
        fontSize: font.fontSize,
        fontWeight: font.fontWeight,
        lineHeight: font.lineHeight,
        textAlign: "center",
      }}
    >
      {/* Icon on the left */}
      <img
        src="/h-icon/solid/heart.svg"
        alt="Heart Icon Left"
        style={{
          width: styles.iconSize,
          height: styles.iconSize,
          filter: `invert(${iconColor === "#FFFFFF" ? 1 : 0})`,
        }}
      />

      {/* Button label */}
      <span>{label}</span>

      {/* Icon on the right */}
      <img
        src="/h-icon/solid/heart.svg"
        alt="Heart Icon Right"
        style={{
          width: styles.iconSize,
          height: styles.iconSize,
          filter: `invert(${iconColor === "#FFFFFF" ? 1 : 0})`,
        }}
      />
    </button>
  );
};

export default DynamicRectangleButton;
