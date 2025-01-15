import React from "react";

const sizeClasses = {
  xs: "h-6 px-2 gap-2 width-auto", // Custom height and padding for xs
  sm: "h-8 px-3 gap-2 width-auto", // Custom height and padding for sm
  md: "h-9 px-4 gap-2 width-auto", // Custom height and padding for md
  lg: "h-11 px-4 gap-2 width-auto", // Custom height and padding for lg
} as const;

const colorClasses = {
  default: "bg-default text-base-content border-line-color",
  primary: "bg-primary text-primary-text border-line-color",
  secondary: "bg-secondary text-secondary-text border-line-color",
  accent: "bg-accent text-accent-text border-line-color",
  neutral: "bg-neutral text-base-content border-line-color",
  ghost: "bg-ghost text-base-content",
  link: "bg-transparent text-link-text underline decoration-[#790E4A]",
  success: "bg-success text-base-content border-line-color",
  warning: "bg-warning text-base-content border-line-color",
  error: "bg-error text-base-content border-line-color",
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

type CapsuleButtonProps = {
  label: string;
  size?: keyof typeof sizeClasses; // 'xs' | 'sm' | 'md' | 'lg'
  color?: keyof typeof colorClasses; // Explicitly type `color` to be a key of `colorClasses`
  onClick?: () => void; // Optional click handler
  className?: string; // Additional Tailwind classes
};

export const CapsuleButton: React.FC<CapsuleButtonProps> = ({
  label,
  size = "md", // Default size
  color = "secondary", // Default color
  onClick,
  className,
}) => {
  // Shared button styles
  const commonClasses = `
    inline-flex 
    items-center 
    justify-center 
    gap-2 
    flex-shrink-0 
    rounded-full 
    ${color === "ghost" || color === "link" ? "" : "border-2"}
  `;

  const iconPath = iconSrc[color];
  const iconSize = iconSizeClasses[size];

  // Combine all classes
  const buttonClasses = `
   ${commonClasses} 
   ${colorClasses[color]} 
   ${sizeClasses[size]} 
   drop-shadow-lg
 `;
  // Custom box shadow
  const customBoxShadow = "shadow-[1px_2px_0px_0px_#000,1px_4px_0px_0px_#000]";

  //console.log("Button Classes:", buttonClasses);

  return (
    <button
      className={`${buttonClasses} ${
        color === "ghost" || color === "link" ? "" : customBoxShadow
      } ${className ?? ""}`}
      onClick={onClick}
    >
      {/* Icon on the left */}
      <img src={iconPath} alt="Heart Icon Left" className={iconSize} />
      <span>{label}</span>
      {/* Icon on the right */}
      <img src={iconPath} alt="Heart Icon Right" className={iconSize} />
    </button>
  );
};

export default CapsuleButton;
