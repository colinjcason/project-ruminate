'use client'

interface SlotModalProps {
  title?: string;
  emoji?: string;
  className?: string;
  children?: React.ReactNode;
}

const SlotModal: React.FC<SlotModalProps> = ({
  title = "Modal / Slot (actions)",
  emoji = "💎",
  className = "",
  children
}) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative z-50 w-full max-w-2xl">

        {/* Header */}
        <div className="h-[175px] px-20 py-7 bg-[#2b13b9] rounded-tl-2xl    rounded-tr-2xl justify-start items-center gap-2 inline-flex w-full overflow-hidden">
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
  alignment: 'right' | 'center' | 'left';
  onButton1Click?: () => void;
  onButton2Click?: () => void;
  button1Text?: string;
  button2Text?: string;
  button1AriaLabel?: string;
  button2AriaLabel?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  alignment,
  onButton1Click,
  onButton2Click,
  button1Text = "Button 1",
  button2Text = "Button 2",
  button1AriaLabel,
  button2AriaLabel
}) => {
  const alignmentClass = {
    right: 'justify-end',
    center: 'justify-center',
    left: 'justify-start'
  }[alignment]

  return (
    <div className={`w-[347px] items-center gap-2 inline-flex ${alignmentClass}`}>
      <button
        onClick={onButton2Click}
        className="px-4 bg-[#dedfe3] rounded-xl shadow-[1px_4px_0px_0px_rgba(0,0,0,1.00)] border-2 border-[#222737] justify-center items-center gap-2 flex"
        aria-label={button2AriaLabel || button2Text}
      >
        <span className="text-center text-[#222737] text-lg font-bold font-['Roboto Flex'] leading-7">
          {button2Text}
        </span>
      </button>
      <button
        onClick={onButton1Click}
        className="px-4 bg-[#790e4a] rounded-xl shadow-[1px_4px_0px_0px_rgba(0,0,0,1.00)] border-2 border-[#222737] justify-center items-center gap-2 flex"
        aria-label={button1AriaLabel || button1Text}
      >
        <span className="text-center text-[#f7cbc0] text-lg font-bold font-['Roboto Flex'] leading-7">
          {button1Text}
        </span>
      </button>
    </div>
  );
};

export default SlotModal;