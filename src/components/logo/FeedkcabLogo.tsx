import React from "react";
import FLogo from "./Flogo";
import ELogo from "./Elogo";
import RightLogo from "./RightLogo";
import KLogo from "./Klogo";
import CLogo from "./CLogo";
import ALogo from "./ALogo";
import BLogo from "./BLogo";

const FeedkcabLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* F, E, E, Right Section */}
      <div className="flex items-center gap-[3.45px] w-[65px] h-[22px]">
        <FLogo />
        <ELogo />
        <ELogo />
        <RightLogo />
      </div>

      {/* K, C, A, B Section (RightLogo & KLogo touching) */}
      <div className="flex items-start gap-[1.717px] w-[77.21px] h-[22.316px]">
        <KLogo className="-ml-[5.5px]" /> {/* Negative margin ensures touching */}
        <CLogo />
        <ALogo />
        <BLogo />
      </div>
    </div>
  );
};

export default FeedkcabLogo;
