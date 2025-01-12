import React from 'react';

interface LargeSquareButtonProps {
  onClick?: () => void; // Optional click handler
  className?: string; // Additional Tailwind classes
}

const LargeSquareButton: React.FC<LargeSquareButtonProps> = ({
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center flex-shrink-0 ${className ?? ''}`}
      style={{
        display: 'flex',
        width: 'var(--t-spacing-11, 44px)',
        height: 'var(--t-spacing-11, 44px)',
        padding: 'var(--t-spacing-0, 0px) var(--t-spacing-4, 16px)',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 'var(--t-spacing-2, 8px)',
        flexShrink: 0,
        borderRadius: 'var(--d-borderRadius-btn, 12px)',
        border: 'var(--d-borderWidth-btn, 2px) solid var(--d-color-semantic-neutral-content, #1F2739)',
        background: 'var(--d-color-semantic-neutral-bg, #FAF5F1)',
        boxShadow: `1px 2px 0px 0px #000, 
                    1px 4px 0px 0px #000`,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        style={{
          width: 'var(--t-spacing-5, 20px)',
          height: 'var(--t-spacing-5, 20px)',
          flexShrink: 0,
          fill: 'var(--d-color-semantic-neutral-content, #222737)',
        }}
      >
        <path
          d="M9.70414 17.4255L9.6987 17.4226L9.67982 17.4124C9.66375 17.4037 9.64076 17.3911 9.61131 17.3746C9.55243 17.3418 9.4677 17.2937 9.3608 17.2308C9.14708 17.1051 8.84431 16.9199 8.48212 16.6791C7.75895 16.1984 6.79268 15.4917 5.82383 14.5886C3.90651 12.8013 1.875 10.1459 1.875 6.875C1.875 4.43495 3.928 2.5 6.40625 2.5C7.86365 2.5 9.1686 3.16591 10 4.20966C10.8314 3.16591 12.1363 2.5 13.5938 2.5C16.072 2.5 18.125 4.43495 18.125 6.875C18.125 10.1459 16.0935 12.8013 14.1762 14.5886C13.2073 15.4917 12.241 16.1984 11.5179 16.6791C11.1557 16.9199 10.8529 17.1051 10.6392 17.2308C10.5323 17.2937 10.4476 17.3418 10.3887 17.3746C10.3592 17.3911 10.3363 17.4037 10.3202 17.4124L10.3013 17.4226L10.2959 17.4255L10.2936 17.4268C10.1103 17.5241 9.88974 17.5241 9.70644 17.4268L9.70414 17.4255Z"
          style={{
            fill: 'var(--d-color-semantic-neutral-content, #222737)',
          }}
        />
      </svg>
    </button>
  );
};

export default LargeSquareButton;
