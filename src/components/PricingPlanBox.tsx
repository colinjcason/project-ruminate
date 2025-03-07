import React from "react";
import MostPopularSticker from "../assets/sticker.png";
import Image from "next/image";

type Props = {
  title: string;
  evaluationCost: number;
  mostPopularOption?: boolean;
  headerIcon?: React.ReactElement;
  accentColor?: "light-blue" | "dark-purple" | "dark-blue";
  children?: React.ReactNode;
};

function PricingPlanBox({
  title,
  evaluationCost,
  mostPopularOption = false,
  headerIcon,
  accentColor = "light-blue",
  children,
}: Props) {
  const textColors = {
    "light-blue": "text-semantic-secondary-700",
    "dark-purple": "text-semantic-accent-900",
    "dark-blue": "text-semantic-secondary-900",
  };

  const bgColors = {
    "light-blue": "bg-semantic-secondary-700",
    "dark-purple": "bg-semantic-accent-900",
    "dark-blue": "bg-semantic-secondary-900",
  };

  const borderColors = {
    "light-blue": "border-semantic-secondary-700",
    "dark-purple": "border-semantic-accent-900",
    "dark-blue": "border-semantic-secondary-900",
  };

  return (
    <div className="relative flex flex-col bg-semantic-secondary-100 min-w-[18rem] max-w-[21rem] min-h-[36rem] text-base-0 rounded-2xl shadow-[-6px_6px_0px_0px_#000]">
      <div
        className={`${bgColors[accentColor]} px-8 py-3 gap-x-2 flex rounded-tr-2xl rounded-tl-2xl border-black border-[3px]`}
      >
        {headerIcon}
        <h3 className="uppercase text-white">{title}</h3>
      </div>
      <div className="flex-1 pt-8 px-8 border-2 border-black border-t-0 rounded-br-2xl rounded-bl-2xl">
        <p className={`${textColors[accentColor]} font-extrabold text-5xl`}>
          ${evaluationCost}
        </p>
        <p className={`${textColors[accentColor]} text-sm font-bold`}>
          per evaluation
        </p>
        {mostPopularOption ? (
          <Image
            className="absolute top-2 -right-4"
            src={MostPopularSticker}
            alt="A purple sticker shaped like a cartoon explosion with text in the middle that says 'most popular'"
            height={160}
            width={160}
          />
        ) : (
          <></>
        )}
        <div className={`${borderColors[accentColor]} border-b-2 my-3`}></div>
        {children}
      </div>
    </div>
  );
}

export default PricingPlanBox;
