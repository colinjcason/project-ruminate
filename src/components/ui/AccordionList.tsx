"use client";
import React, { useState } from "react";
import Accordion from "./accordion";

type AccordionListProps = {
  items: { title: string; body: string }[];
};

const AccordionList: React.FC<AccordionListProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          body={item.body}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default AccordionList;
