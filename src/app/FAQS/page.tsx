import AccordionList from "../../components/ui/AccordionList";

const faqItems = [
  { title: "How do I know I will get quality feedback?", body: "Our evaluators are carefully vetted. They have at least four years of experience or a professional certification, such as Certified Cheese Professional. Those without certifications can apply with a strong letter of recommendation. Evaluators who fail to provide quality feedback are removed from our platform." },
  { title: "How much time does an evaluation take?", body: "Evaluations typically take between 2-4 business days..." },
  { title: "How long does it take to get feedback?", body: "You will receive feedback within 5-7 business days..." },
  { title: "What certifications does Feedback recognize?", body: "We recognize certifications such as Certified Cheese Professional..." },
];
export default function FAQSPage() {
    return (
      <div
        className="w-screen h-screen flex justify-center items-center"
        style={{
          backgroundColor: "var(--d-color-semantic-secondary-800, #3D83AB)",
          backgroundImage: "linear-gradient(var(--d-color-semantic-secondary-700, #69A2BC) 1px, transparent 1px), linear-gradient(90deg, var(--d-color-semantic-secondary-700, #69A2BC) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      >
        <AccordionList items={faqItems} />
      </div>
    );
  }