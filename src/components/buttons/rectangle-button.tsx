
// import React from 'react';

// interface RectangleButtonProps {
//   label: string; // Button label
//   onClick?: () => void; // Optional click handler
//   className?: string; // Additional Tailwind classes
// }

// const RectangleButton: React.FC<RectangleButtonProps> = ({
//   label,
//   onClick,
//   className,
// }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`inline-flex items-center h-[44px] px-[16px] py-0 gap-[8px] 
//         shrink-0 rounded-[12px] border-2 border-neutral-content bg-neutral 
//         shadow-[1px_2px_0_0_#000,1px_4px_0_0_#000] 
//         text-black hover:bg-neutral-focus active:shadow-none
//         ${className ?? ''}`}
//     >
//       {/* Icon on the left */}
//       <img
//         src="/h-icon/solid/heart.svg"
//         alt="Heart Icon Left"
//         className="w-5 h-5"
//       />

//       {/* Button label */}
//       <span className="">{label}</span>

//       {/* Icon on the right */}
//       <img
//         src="/h-icon/solid/heart.svg"
//         alt="Heart Icon Right"
//         className="w-5 h-5"
//       />
//     </button>
//   );
// };

// export default RectangleButton;

import React from 'react';

interface RectangleButtonProps {
  label: string; // Button label
  onClick?: () => void; // Optional click handler
  className?: string; // Additional Tailwind classes
}

const RectangleButton: React.FC<RectangleButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-[8px] flex-shrink-0 ${className ?? ''}`}
      style={{
        display: 'inline-flex',
        height: 'var(--t-spacing-11, 44px)',
        padding: 'var(--t-spacing-0, 0px) var(--t-spacing-4, 16px)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 'var(--d-borderRadius-btn, 12px)',
        border: 'var(--d-borderWidth-btn, 2px) solid var(--d-color-semantic-neutral-content, #1F2739)',
        background:
          'var(--d-color-semantic-neutral-bg, #FAF5F1) var(--d-color-semantic-neutral-bg, color(display-p3 0.9725 0.9608 0.9451))',
        boxShadow: `1px 2px 0px 0px #000, 
                    1px 4px 0px 0px #000`,
      }}
    >
      {/* Icon on the left */}
      <img
        src="/h-icon/solid/heart.svg"
        alt="Heart Icon Left"
        style={{
          width: '20px',
          height: '20px',
        }}
      />

      {/* Button label */}
      <span
        style={{
          fontFamily: 'var(--t-font-family-theme-primary, "Tailwind")',
          fontSize: 'var(--t-font-size-xl, 20px)', // Text size is now "text-xl"
          fontWeight: 'var(--t-font-weight-bold, 700)', // Bold weight
          lineHeight: 'var(--t-font-lineHeight-leading-6, 24px)', // Matches leading-6
          color: 'var(--d-color-semantic-neutral-content, #1F2739)',
        }}
      >
        {label}
      </span>

      {/* Icon on the right */}
      <img
        src="/h-icon/solid/heart.svg"
        alt="Heart Icon Right"
        style={{
          width: '20px',
          height: '20px',
        }}
      />
    </button>
  );
};

export default RectangleButton;
