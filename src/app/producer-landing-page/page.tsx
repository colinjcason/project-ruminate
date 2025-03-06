import Box from "@/components/Box";
import Lightbulb from "../../assets/lightbulb.png";
import Medal from "../../assets/medal.png";
import Checklist from "../../assets/checklist.png";
import Image from "next/image";
import PricingPlanBox from "@/components/PricingPlanBox";
import { ForkIcon } from "@/components/icons";

export default function ProducerLandingPage() {
  return (
    <div className="bg-white">
      <main className="flex flex-col">
        {/* EXPERIENCED PROFESSIONALS SECTION */}
        <section className="flex justify-center bg-semantic-accent-100">
          <div className="px-12 sm:px-24 py-16 flex flex-col gap-y-24">
            <div className="flex flex-col gap-y-5">
              <h2 className="big-header-normal">
                EXPERIENCED PROFESSIONALS <br></br>EXCEPTIONAL{" "}
                <span className="big-header-wide">INSIGHTS</span>
              </h2>

              <p className="max-w-screen-sm">
                Our evaluators are seasoned experts in retail, grocery,
                wholesale, and consulting. Each one represents years of
                experience and a deep understanding of customer preferences and
                buying behavior
              </p>
            </div>
            <div className="flex flex-col flex-wrap items-center md:items-start gap-y-24 md:flex-row justify-between md:gap-x-16">
              <Box
                title="Carefully Vetted"
                body="Evaluators need at least four years of industry experience, a professional certification, or a supervisor recommendation."
                cornerImage={
                  <Image
                    src={Checklist}
                    alt="a piece of paper with lines and check marks representing a check list"
                    height={100}
                    width={100}
                  />
                }
              />
              <Box
                title="High Standards"
                body="We demand punctuality, clear communication, and thorough critiques from all evaluators."
                cornerImage={
                  <Image
                    src={Medal}
                    alt="a medal icon with a two ribbons"
                    height={110}
                    width={110}
                  />
                }
              />
              <Box
                title="Customer Insights"
                body="Evaluators’ feedback represents not just their expertise but also their customers’ needs and preferences."
                cornerImage={
                  <Image
                    src={Lightbulb}
                    alt="a lightlbulb icon with a lightning bolt in the center of the bulb"
                    height={100}
                    width={100}
                  />
                }
              />
            </div>
          </div>
        </section>
        {/* PRICING PLANS SECTION */}
        <section className="flex justify-center bg-semantic-secondary-400">
          <div className="px-12 sm:px-24 py-16 flex flex-col gap-y-24">
            <h2 className="big-header-normal w-max">
              PRICING <span className="big-header-wide">PLANS</span>
            </h2>
            <div className="flex flex-col flex-wrap items-center md:items-start gap-y-24 md:flex-row justify-between md:gap-x-16">
              <PricingPlanBox
                title="Snack"
                evaluationCost={99}
                accentColor="light-blue"
                headerIcon={<ForkIcon />}
              >
                <p className="text-[1rem] mb-2">Great for general feedback.</p>
                <p className="text-[1rem] font-bold mb-1">Includes:</p>
                <ul className="text-[1rem] list-disc pl-3 leading-[1.25rem] flex flex-col gap-y-3">
                  <li>
                    <span className="font-bold">3 Evaluators </span>review your
                    product.
                  </li>
                  <li>
                    <span className="font-bold">
                      Brand and packaging feedback {""}
                    </span>
                    to refine your design.
                  </li>
                  <li>
                    <span className="font-bold">
                      Product and pricing analysis{" "}
                    </span>
                    for sales insights.
                  </li>
                  <li>
                    <span className="font-bold">
                      Option to exclude 1 U.S. region
                    </span>{" "}
                    from evaluation.
                  </li>
                  <li>
                    Access to Feedback’s{" "}
                    <span className="font-bold">tools library</span> for
                    improvement resources.
                  </li>
                </ul>
              </PricingPlanBox>
              <PricingPlanBox
                title="Snack"
                evaluationCost={349}
                accentColor="dark-purple"
                headerIcon={<ForkIcon />}
              >
                <p className="text-[1rem] mb-2 leading-[1.25rem]">
                  Ideal for more in-depth feedback and flexibility.
                </p>
                <p className="text-[1rem] font-bold mb-1">
                  Everything in Snack, plus:
                </p>
                <ul className="text-[1rem] list-disc pl-3 leading-[1.25rem] flex flex-col gap-y-3">
                  <li>
                    <span className="font-bold">Quick summaries </span> from the
                    Feedback team for easy understanding.
                  </li>
                  <li>
                    Add up to{" "}
                    <span className="font-bold">2 extra evaluators</span> ($58
                    each).
                  </li>
                  <li>
                    Evaluate up to <span className="font-bold">6 products</span>{" "}
                    in one round.
                  </li>
                </ul>
              </PricingPlanBox>
              <PricingPlanBox
                title="Snack"
                evaluationCost={569}
                accentColor="dark-blue"
                headerIcon={<ForkIcon />}
              >
                <p className="text-[1rem] mb-2 leading-[1.25rem]">
                  Perfect for region-specific insights and tailored evaluations.
                </p>
                <p className="text-[1rem] font-bold mb-1">
                  Everything in Meal, plus:
                </p>
                <ul className="text-[1rem] list-disc pl-3 leading-[1.25rem] flex flex-col gap-y-3">
                  <li>
                    <span className="font-bold">
                      Target a specific U.S. region
                    </span>{" "}
                    for evaluations.
                  </li>
                  <li>
                    <span className="font-bold">
                      Unlimited 1-hour debrief calls
                    </span>{" "}
                    with the Feedback team to dig into your results.
                  </li>
                  <li>
                    <span className="font-bold">Add custom questions</span> to
                    the evaluation form to get answers unique to your goals.
                  </li>
                </ul>
              </PricingPlanBox>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
