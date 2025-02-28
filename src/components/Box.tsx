import React from "react";

type Props = {
  title: string;
  body: string;
};

function Box({ title, body }: Props) {
  return (
    <div className="semantic-secondary-100 p-4 text-base-0 rounded-lg shadow-[-6px_6px_0px_0px_#000] border-2 border-black">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default Box;
