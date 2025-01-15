import React from "react";

// const sizeClasses = {
//   xs: "h-6 w-6 px-2 gap-2", // Custom height and padding for xs
//   sm: "h-8 w-8 px-3 gap-2", // Custom height and padding for sm
//   md: "h-9 w-9 px-4 gap-2", // Custom height and padding for md
//   lg: "h-11 w-11 px-4 gap-2", // Custom height and padding for lg
// } as const;

// const sizeClasses = {
//   xs: "h-6 px-2 gap-2 width-auto", // Custom height and padding for xs
//   sm: "h-8 px-3 gap-2 width-auto", // Custom height and padding for sm
//   md: "h-9 px-4 gap-2 width-auto", // Custom height and padding for md
//   lg: "h-11 px-4 gap-2 width-auto", // Custom height and padding for lg
// } as const;

const sizeClasses = {
  xs: "w-[var(--t-spacing-6, 24px)] h-[var(--t-spacing-6, 24px)] p-[var(--t-spacing-0, 0px)] var(--t-spacing-2, 8px) gap-2", // Circle size for xs
  sm: "w-[var(--t-spacing-8, 32px)] h-[var(--t-spacing-8, 32px)] p-[var(--t-spacing-0, 0px)] var(--t-spacing-3, 12px) gap-2", // Circle size for sm
  md: "w-[var(--t-spacing-9, 36px)] h-[var(--t-spacing-9, 36px)] p-[var(--t-spacing-0, 0px)] var(--t-spacing-4, 16px) gap-2", // Circle size for md
  lg: "w-[var(--t-spacing-11, 44px)] h-[var(--t-spacing-11, 44px)] p-[var(--t-spacing-0, 0px)] var(--t-spacing-4, 16px) gap-2", // Circle size for lg
} as const;

// const iconSizeClasses = {
//   xs: "w-[var(--t-spacing-35, 14px)] h-[var(--t-spacing-35, 14px)]", // Icon size for xs
//   sm: "w-[var(--t-spacing-35, 14px)] h-[var(--t-spacing-35, 14px)]", // Icon size for sm
//   md: "w-[var(--t-spacing-4, 16px)] h-[var(--t-spacing-4, 16px)]", // Icon size for md
//   lg: "w-[var(--t-spacing-5, 20px)] h-[var(--t-spacing-5, 20px)]", // Icon size for lg
// } as const;

const colorClasses = {
  default: "bg-default border-line-color",
  primary: "bg-primary border-line-color",
  secondary: "bg-secondary border-line-color",
  accent: "bg-accent border-line-color",
  neutral: "bg-neutral border-line-color",
  ghost: "bg-ghost",
  //   link: "bg-transparent text-link-text underline decoration-[#790E4A]",
  success: "bg-success border-line-color",
  warning: "bg-warning border-line-color",
  error: "bg-error border-line-color",
} as const;

const iconSrc = {
  default: "/h-icon/solid/heart.svg",
  primary: "/h-icon/solid/pink-heart.svg",
  secondary: "/h-icon/solid/blue-heart.svg",
  accent: "/h-icon/solid/purple-heart.svg",
  neutral: "/h-icon/solid/heart.svg",
  ghost: "/h-icon/solid/heart.svg",
  link: "/h-icon/solid/darkpink-heart.svg",
  success: "/h-icon/solid/heart.svg",
  warning: "/h-icon/solid/heart.svg",
  error: "/h-icon/solid/heart.svg",
} as const;

const iconSizeClasses = {
  xs: "w-[14px] h-[14px]",
  sm: "w-[14px] h-[14px]",
  md: "w-[16px] h-[16px]",
  lg: "w-[20px] h-[20px]",
} as const;

type RoundButtonProps = {
  size?: keyof typeof sizeClasses; // 'xs' | 'sm' | 'md' | 'lg'
  color?: keyof typeof colorClasses; // Explicitly type `color` to be a key of `colorClasses`
  onClick?: () => void; // Optional click handler
  className?: string; // Additional Tailwind classes
};

export const RoundButton: React.FC<RoundButtonProps> = ({
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
    ${color === "ghost" ? "" : "border-2"}
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

  console.log("Button Classes:", buttonClasses);

  return (
    <button
      className={`${buttonClasses} ${
        color === "ghost" ? "" : customBoxShadow
      } ${className ?? ""}`}
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

export default RoundButton;
