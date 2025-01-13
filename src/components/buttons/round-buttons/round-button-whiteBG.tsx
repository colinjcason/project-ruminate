import React from "react";

const sizeClasses = {
  xs: "w-[var(--t-spacing-6, 24px)] h-[var(--t-spacing-6, 24px)] p-[var(--t-spacing-0, 0px)] var(--t-spacing-2, 8px) gap-2", // Circle size for xs
  sm: "w-[var(--t-spacing-8, 32px)] h-[var(--t-spacing-8, 32px)] p-[var(--t-spacing-0, 0px)] var(--t-spacing-3, 12px) gap-2", // Circle size for sm
  md: "w-[var(--t-spacing-9, 36px)] h-[var(--t-spacing-9, 36px)] p-[var(--t-spacing-0, 0px)] var(--t-spacing-4, 16px) gap-2", // Circle size for md
  lg: "w-[var(--t-spacing-11, 44px)] h-[var(--t-spacing-11, 44px)] p-[var(--t-spacing-0, 0px)] var(--t-spacing-4, 16px) gap-2", // Circle size for lg
} as const;

const colorClasses = {
  default: "text-base-content border-base-content",
  primary: "text-primary border-primary",
  secondary: "text-secondary border-secondary",
  accent: "text-accent border-accent",
  success: "text-success border-success",
  warning: "text-warning border-warning",
  error: "text-error border-error",
} as const;

const iconSrc = {
  default: "/h-icon/solid/heart.svg",
  primary: "/h-icon/solid/darkpink-heart.svg",
  secondary: "/h-icon/solid/full-blue-heart.svg",
  accent: "/h-icon/solid/full-purple-heart.svg",
  success: "/h-icon/solid/full-green-heart.svg",
  warning: "/h-icon/solid/full-yellow-heart.svg",
  error: "/h-icon/solid/full-red-heart.svg",
} as const;

const iconSizeClasses = {
  xs: "w-[14px] h-[14px]",
  sm: "w-[14px] h-[14px]",
  md: "w-[16px] h-[16px]",
  lg: "w-[20px] h-[20px]",
} as const;

type RoundButtonPlainBGProps = {
  size?: keyof typeof sizeClasses; // 'xs' | 'sm' | 'md' | 'lg'
  color?: keyof typeof colorClasses; // Explicitly type `color` to be a key of `colorClasses`
  onClick?: () => void; // Optional click handler
  className?: string; // Additional Tailwind classes
};

export const RoundButtonPlainBG: React.FC<RoundButtonPlainBGProps> = ({
  size = "md", // Default size
  color = "secondary", // Default color
  onClick,
  className,
}) => {
  // Shared button styles
  const commonClasses = `
    flex 
    items-center 
    justify-center     
    flex-shrink-0 
    gap-2
    rounded-full 
    border-2
  `;

  const iconPath = iconSrc[color];
  const iconSize = iconSizeClasses[size];

  console.log("icon path: iconsize", iconPath, iconSize);

  // Combine all classes
  const buttonClasses = `
   ${commonClasses} 
   ${colorClasses[color]} 
   ${sizeClasses[size]} 
   drop-shadow-lg
 `;
  console.log("Button Classes:", buttonClasses);
  // Custom box shadow
  const customBoxShadow = "shadow-[1px_2px_0px_0px_#000,1px_4px_0px_0px_#000]";

  //console.log("Button Classes:", buttonClasses);

  return (
    <button
      className={`${buttonClasses} ${customBoxShadow} ${className ?? ""}`}
      onClick={onClick}
    >
      {/* Icon on the left */}
      <img
        src={iconPath}
        alt="Heart Icon"
        className={`${iconSize} flex-shrink-0`}
      />
    </button>
  );
};

export default RoundButtonPlainBG;
