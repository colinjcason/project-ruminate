import React from "react";

type Props = {
  title: string;
  body: string;
  cornerImage?: React.ReactElement;
  children?: React.ReactNode;
};

function Box({ title, body, cornerImage, children }: Props) {
  return (
    <div className="flex-1 relative flex flex-col gap-5 bg-semantic-secondary-100 max-w-xs min-h-96 pt-8 px-8 text-base-0 rounded-[1rem] shadow-[-6px_6px_0px_0px_#000] border-2 border-black">
      <div className="absolute -top-16 -right-10">{cornerImage}</div>
      <h3>{title}</h3>
      <p className="font-[500]">{body}</p>
      {children}
    </div>
  );
}

export default Box;
