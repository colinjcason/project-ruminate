import React from 'react';

interface SmallSquareButtonProps {
  onClick?: () => void; // Optional click handler
  className?: string; // Additional Tailwind classes
}

const SmallSquareButton: React.FC<SmallSquareButtonProps> = ({
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center flex-shrink-0 ${className ?? ''}`}
      style={{
        display: 'flex',
        width: 'var(--t-spacing-6, 24px)',
        height: 'var(--t-spacing-6, 24px)',
        padding: 'var(--t-spacing-0, 0px)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 'var(--d-borderRadius-btn-xs, 4px)',
        border: 'var(--d-borderWidth-btn, 2px) solid var(--d-color-semantic-neutral-content, #1F2739)',
        background: 'var(--d-color-semantic-neutral-bg, #FAF5F1)',
        boxShadow: `1px 2px 0px 0px #000, 
                    1px 4px 0px 0px #000`,
      }}
    >
      <img
        src="/h-icon/solid/heart.svg"
        alt="Heart Icon"
        className="flex-shrink-0"
        style={{
          width: 'var(--t-spacing-35, 14px)',
          height: 'var(--t-spacing-35, 14px)',
          flexShrink: 0,
        }}
      />
    </button>
  );
};

export default SmallSquareButton;


