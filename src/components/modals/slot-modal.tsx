'use client'

import React, { useEffect, useState } from 'react';

interface SlotModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  emoji?: string;
  className?: string;
  children?: React.ReactNode;
}

const SlotModal: React.FC<SlotModalProps> = ({
  isOpen,
  onClose,
  title = "Modal / Slot (actions)",
  emoji = "💎",
  className = "",
  children
}) => {
  // Add client-side only state
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything on server-side
  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

      <div className="relative z-50 w-full max-w-2xl">
        {/* Header */}
        <div className="h-[175px] px-20 py-7 bg-[#2b13b9] rounded-tl-2xl rounded-tr-2xl justify-start items-center gap-2 inline-flex w-full overflow-hidden">
          <div className="text-white text-5xl font-bold font-mono leading-[48px]">{emoji}</div>
          <div className="text-white text-4xl font-bold font-['Roboto Flex'] leading-10">{title}</div>
        </div>

        {/* Content */}
        <div className="h-[348px] p-20 bg-white rounded-[5px] border border-[#9747ff] flex-col justify-center items-center gap-10 inline-flex w-full overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

interface ButtonGroupProps {
  alignment: 'start' | 'center' | 'end';
  onButton1Click?: () => void;
  onButton2Click?: () => void;
  button1Text?: string;
  button2Text?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  alignment,
  onButton1Click,
  onButton2Click,
  button1Text = "Button 1",
  button2Text = "Button 2"
}) => {
  return (
    <div className={`w-[347px] justify-${alignment} items-center gap-2 inline-flex`}>
      <button
        onClick={onButton2Click}
        className="px-4 bg-[#dedfe3] rounded-xl shadow-[1px_4px_0px_0px_rgba(0,0,0,1.00)] border-2 border-[#222737] justify-center items-center gap-2 flex">
        <div className="text-center text-[#222737] text-lg font-bold font-['Roboto Flex'] leading-7">
          {button2Text}
        </div>
      </button>
      <button
        onClick={onButton1Click}
        className="px-4 bg-[#790e4a] rounded-xl shadow-[1px_4px_0px_0px_rgba(0,0,0,1.00)] border-2 border-[#222737] justify-center items-center gap-2 flex">
        <div className="text-center text-[#f7cbc0] text-lg font-bold font-['Roboto Flex'] leading-7">
          {button1Text}
        </div>
      </button>
    </div>
  );
};

export default SlotModal;