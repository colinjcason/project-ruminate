import React from "react";

const sizeClasses = {
  xs: "h-6 px-2 gap-2 width-auto", // Custom height and padding for xs
  sm: "h-8 px-3 gap-2 width-auto", // Custom height and padding for sm
  md: "h-9 px-4 gap-2 width-auto", // Custom height and padding for md
  lg: "h-11 px-4 gap-2 width-auto", // Custom height and padding for lg
} as const;

const colorClasses = {
  default: "text-base-content border-base-content",
  primary: "text-primary border-primary",
  secondary: "text-secondary border-secondary",
  accent: "text-accent border-accent",
  //   neutral: "text-base-content border-line-color",
  //   ghost: "bg-ghost text-base-content",
  //   link: "bg-transparent text-link-text underline decoration-[#790E4A]",
  success: "text-success border-success",
  warning: "text-warning border-warning",
  error: "text-error border-error",
} as const;

const iconSrc = {
  default: "/h-icon/solid/heart.svg",
  primary: "/h-icon/solid/darkpink-heart.svg",
  secondary: "/h-icon/solid/full-blue-heart.svg",
  accent: "/h-icon/solid/full-purple-heart.svg",
  //   neutral: "/h-icon/solid/heart.svg",
  //   ghost: "/h-icon/solid/heart.svg",
  //   link: "/h-icon/solid/darkpink-heart.svg",
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

type CapsuleButtonPlainBGProps = {
  label: string;
  size?: keyof typeof sizeClasses; // 'xs' | 'sm' | 'md' | 'lg'
  color?: keyof typeof colorClasses; // Explicitly type `color` to be a key of `colorClasses`
  onClick?: () => void; // Optional click handler
  className?: string; // Additional Tailwind classes
};

export const CapsuleButtonPlainBG: React.FC<CapsuleButtonPlainBGProps> = ({
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
    border-2
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
      className={`${buttonClasses} ${customBoxShadow} ${className ?? ""}`}
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

export default CapsuleButtonPlainBG;
