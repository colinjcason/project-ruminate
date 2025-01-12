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
        borderRadius: 'var(--d-borderRadius-btn-xs, 4px)',
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
          width: '14px',
          height: '14px',
        }}
      />

      {/* Button label */}
      <span
        style={{
          fontFamily: 'var(--t-font-family-theme-primary, "Tailwind")',
          fontSize: 'var(--t-font-size-sm, 14px)', // Text size is now "text-sm"
          fontWeight: 'var(--t-font-weight-bold, 700)', // Bold weight
          lineHeight: 'var(--t-font-lineHeight-leading-5, 20px)', // Matches leading-5
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
          width: '14px',
          height: '14px',
        }}
      />
    </button>
  );
};

export default SmallRectangleButton;
