import React from "react";

type Props = {
  title: string;
  body: string;
};

function Box({ title, body }: Props) {
  return (
    <div className="flex flex-col gap-5 semantic-secondary-100 w-[19.25rem] py-14 px-8 text-base-0 rounded-[1rem] shadow-[-6px_6px_0px_0px_#000] border-2 border-black">
      <h3>{title}</h3>
      <p className="font-[500]">{body}</p>
    </div>
  );
}

export default Box;
