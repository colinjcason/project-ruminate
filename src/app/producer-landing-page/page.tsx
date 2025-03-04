import Box from "@/components/Box";
import Lightbulb from "../../assets/lightbulb.png";
import Medal from "../../assets/medal.png";
import Checklist from "../../assets/checklist.png";
import Image from "next/image";

export default function ProducerLandingPage() {
  return (
    <div className="bg-white">
      <main className="flex flex-col">
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
      </main>
    </div>
  );
}
