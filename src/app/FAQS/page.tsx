import AccordionList from "../../components/ui/AccordionList";

const faqItems = [
  {
    title: "How do I know I will get quality feedback?",
    body: "Our evaluators are carefully vetted. They have at least four years of experience or a professional certification, such as Certified Cheese Professional. Those without certifications can apply with a strong letter of recommendation. Evaluators who fail to provide quality feedback are removed from our platform.",
  },
  {
    title: "How much time does an evaluation take?",
    body: "Evaluations typically take between 2-4 business days...",
  },
  {
    title: "How long does it take to get feedback?",
    body: "You will receive feedback within 5-7 business days...",
  },
  {
    title: "What certifications does Feedback recognize?",
    body: "We recognize certifications such as Certified Cheese Professional...",
  },
];

export default function FAQSPage() {
  return (
    <div className="max-w-[1280px] container px-12 sm:px-24 pt-16 pb-36 flex flex-col gap-y-14">
      <div className="relative">
        {/* Header Title - Positioned to the Left */}
        <h1 className="text-base-0 font-roboto text-[60px] font-black leading-[1.37] text-left text-white mb-[28px]">
          FAQs
        </h1>

        {/* Accordion Section */}
        <div className="flex flex-col items-center">
          <AccordionList items={faqItems} />
        </div>
      </div>
    </div>
  );
}

// import AccordionList from "../../components/ui/AccordionList";

// const faqItems = [
//   { title: "How do I know I will get quality feedback?", body: "Our evaluators are carefully vetted. They have at least four years of experience or a professional certification, such as Certified Cheese Professional. Those without certifications can apply with a strong letter of recommendation. Evaluators who fail to provide quality feedback are removed from our platform." },
//   { title: "How much time does an evaluation take?", body: "Evaluations typically take between 2-4 business days..." },
//   { title: "How long does it take to get feedback?", body: "You will receive feedback within 5-7 business days..." },
//   { title: "What certifications does Feedback recognize?", body: "We recognize certifications such as Certified Cheese Professional..." },
// ];
// export default function FAQSPage() {
//     return (
//       <div
//         className="w-screen h-screen flex justify-center items-center"
//         style={{
//           backgroundColor: "var(--d-color-semantic-secondary-800, #3D83AB)",
//           backgroundImage: "linear-gradient(var(--d-color-semantic-secondary-700, #69A2BC) 1px, transparent 1px), linear-gradient(90deg, var(--d-color-semantic-secondary-700, #69A2BC) 1px, transparent 1px)",
//           backgroundSize: "50px 50px",
//         }}
//       >
//         <AccordionList items={faqItems} />
//       </div>
//     );
//   }
