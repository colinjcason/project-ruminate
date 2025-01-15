
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
