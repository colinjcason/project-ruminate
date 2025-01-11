import React from 'react';

interface SmallRectangleButtonProps {
  label: string; // Button label
  onClick?: () => void; // Optional click handler
  className?: string; // Additional Tailwind classes
}

const SmallRectangleButton: React.FC<SmallRectangleButtonProps> = ({
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
        height: 'var(--t-spacing-6, 24px)',
        padding: 'var(--t-spacing-0, 0px) var(--t-spacing-2, 8px)',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 'var(--t-spacing-2, 8px)',
        borderRadius: 'var(--d-borderRadius-btn-xs, 4px)',
        border: 'var(--d-borderWidth-btn, 2px) solid var(--d-color-semantic-neutral-content, #1F2739)',
        background: 'var(--d-color-semantic-neutral-bg, #FAF5F1)',
        boxShadow: `1px 2px 0px 0px #000, 
                    1px 4px 0px 0px #000`,
        fontFamily: 'var(--t-font-family-theme-primary, "Roboto Flex")',
        fontSize: 'var(--t-font-size-sm, 14px)',
        fontWeight: 'var(--t-font-weight-bold, 700)',
        lineHeight: 'var(--t-font-lineHeight-leading-5, 20px)',
        textAlign: 'center',
        color: 'var(--d-color-semantic-neutral-content, #1F2739)',
      }}
    >
      {/* Icon on the left */}
      <img
        src="/h-icon/solid/heart.svg"
        alt="Heart Icon Left"
        style={{
          width: 'var(--t-spacing-35, 14px)',
          height: 'var(--t-spacing-35, 14px)',
        }}
      />

      {/* Label */}
      <span>{label}</span>

      {/* Icon on the right */}
      <img
        src="/h-icon/solid/heart.svg"
        alt="Heart Icon Right"
        style={{
          width: 'var(--t-spacing-35, 14px)',
          height: 'var(--t-spacing-35, 14px)',
        }}
      />
    </button>
  );
};

export default SmallRectangleButton;