import Box from "@/components/Box";
import { ChecklistIcon } from "@/components/icons";

export default function ProducerLandingPage() {
  return (
    <div className="bg-white">
      <main className="flex flex-col">
        <section className="px-24 py-16 flex flex-col bg-semantic-accent-100 gap-y-16">
          <div className="flex flex-col gap-y-5">
            <h2 className="big-header-normal">
              EXPERIENCED PROFESSIONALS <br></br>EXCEPTIONAL{" "}
              <span className="big-header-wide">INSIGHTS</span>
            </h2>

            <p className="max-w-screen-sm">
              Our evaluators are seasoned experts in retail, grocery, wholesale,
              and consulting. Each one represents years of experience and a deep
              understanding of customer preferences and buying behavior
            </p>
          </div>
          <div className="flex justify-between gap-x-8">
            <Box
              title="Carefully Vetted"
              body="Evaluators need at least four years of industry experience, a professional certification, or a supervisor recommendation."
              cornerImage={<ChecklistIcon />}
            />
            <Box
              title="Carefully Vetted"
              body="Evaluators need at least four years of industry experience, a professional certification, or a supervisor recommendation."
              cornerImage={<ChecklistIcon />}
            />
            <Box
              title="Carefully Vetted"
              body="Evaluators need at least four years of industry experience, a professional certification, or a supervisor recommendation."
              cornerImage={<ChecklistIcon />}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
