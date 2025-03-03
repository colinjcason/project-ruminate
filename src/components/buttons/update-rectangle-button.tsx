import React from "react";
import ArrowIcon from "../ui/ArrowIcon"; // Import the arrow icon component

type ButtonSize = "xs" | "sm" | "md" | "lg";
type ButtonColor = string;

interface DynamicButtonProps {
  label: string;
  size?: ButtonSize;
  bgColor?: ButtonColor;
  textColor?: ButtonColor;
  iconColor?: ButtonColor;
  outlineColor?: ButtonColor;
  noOutline?: boolean;
  onClick?: () => void;
  className?: string;
}

export const DynamicRectangleButton: React.FC<DynamicButtonProps> = ({
  label,
  size = "lg",
  bgColor = "#FFFFFF",
  textColor = "#11639A",
  iconColor = "#11639A",
  outlineColor = "#222737",
  noOutline = false,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`hero-button ${noOutline ? "no-outline" : ""} ${className}`}
    >
      <span className="hero-button-text">{label}</span>
      <ArrowIcon />
    </button>
  );
};

export default DynamicRectangleButton;
