import React from "react";

type Props = {
  title: string;
  body: string;
  cornerImage?: React.FC;
};

function Box({ title, body, cornerImage }: Props) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default Box;
