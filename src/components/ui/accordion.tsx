import React from "react";
import Arrow from "@/components/ui/Arrow";

type AccordionProps = {
  title: string;
  body: string;
  isOpen: boolean;
  onClick: () => void;
};

const Accordion: React.FC<AccordionProps> = ({ title, body, isOpen, onClick }) => {
  return (
    <div className="w-[764px] border-2 border-black rounded-[16px] overflow-hidden">
      <div className={`collapse collapse-arrow ${isOpen ? "collapse-open" : ""} bg-secondary border-none`}>
        <input type="checkbox" checked={isOpen} onChange={onClick} />
        <div 
          className={`collapse-title flex items-center justify-between text-xl font-medium p-[24px] text-secondary-content bg-secondary
          ${isOpen ? "rounded-t-[16px] rounded-b-none" : "rounded-[16px]"} w-full b`}
        >
          {title}
        </div>
        <div className="collapse-content bg-[var(--d-color-semantic-secondary-100,#F2FCF7)] rounded-b-[16px]">
          <div className="w-[653px] p-[12px_24px_24px_24px] text-[var(--base-content,#222737)] font-[var(--fontFamilies-roboto-flex,'Roboto Flex')] text-[var(--fontSize-2,16px)] font-[400] leading-[var(--lineHeights-5,20px)]">
            {body}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;




// import React from "react";
// import Arrow from "@/components/ui/Arrow";

// type AccordionProps = {
//   title: string;
//   body: string;
//   isOpen: boolean;
//   onClick: () => void;
// };

// const Accordion: React.FC<AccordionProps> = ({
//   title,
//   body,
//   isOpen,
//   onClick,
// }) => {
//   return (
//     <div
//       className="w-[764px] flex flex-col items-start  rounded-[16px] bg-[var(--d-color-semantic-secondary-100,#F2FCF7)] gap-[var(--t-spacing-2,8px)] overflow-hidden"
//     >
//       <button
//         onClick={onClick}
//         className={`w-full flex items-center justify-between p-4 bg-[var(--d-color-semantic-secondary-900,#11639A)] border-2 border-black ${isOpen ? 'rounded-t-[16px] rounded-b-none' : 'rounded-[16px]'} overflow-hidden`}
//       >
//         <span
//             className="text-xl font-medium flex-1 text-left font-[var(--fontFamilies-roboto-flex,'Roboto Flex')] text-[var(--fontSize-4,20px)] text-[#DEF7EA] font-[500] leading-[var(--lineHeights-7,28px)]"
//             >
//           {title}
//         </span>
//         <Arrow isOpen={isOpen} />
//       </button>
//       {isOpen && (
//  <div className="w-full border-x-2 border-b-2 border-black border-solid rounded-b-[16px]">
//  <div className="w-[653px] flex flex-col items-start bg-[var(--d-color-semantic-secondary-100,#F2FCF7)] text-[#222737] font-[var(--fontFamilies-roboto-flex,'Roboto Flex')] text-[var(--fontSize-2,16px)] font-[400] leading-[var(--lineHeights-5,20px)] p-[12px_24px_24px_24px] max-w-[964px] self-stretch">
//    {body}
//  </div>
// </div>
//       )}
//     </div>
//   );
// };

// export default Accordion;
