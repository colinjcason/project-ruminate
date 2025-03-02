import React from "react";

type Props = {
  title: string;
  body: string;
  cornerImage?: React.ReactElement;
};

function Box({ title, body, cornerImage }: Props) {
  return (
    <div className="relative flex flex-col gap-5 bg-semantic-secondary-100 max-w-xs min-h-96 py-14 px-8 text-base-0 rounded-[1rem] shadow-[-6px_6px_0px_0px_#000] border-2 border-black">
      <div className="absolute top-0 right-0">{cornerImage}</div>
      <h3>{title}</h3>
      <p className="font-[500]">{body}</p>
    </div>
  );
}

export default Box;
