import Box from "@/components/Box";
import Lightbulb from "../../assets/lightbulb.png";
import Medal from "../../assets/medal.png";
import Checklist from "../../assets/checklist.png";
import Image from "next/image";
import PricingPlanBox from "@/components/PricingPlanBox";
import {
  ArrowRightIcon,
  ForkAndKnifeIcon,
  ForkIcon,
  SilverwareIcon,
} from "@/components/icons";
import DataBox from "@/components/DataBox";

import personWithMegaphone from "../../assets/person-with-megaphone.png";
import chocolateBackground from "../../assets/chocolate.png";
import FAQSPage from "../FAQS/page";
import ForkBanner from "@/components/fork-banner";
import { Carousel } from "@/components/ui/carousel";
import DynamicRectangleButton from "@/components/buttons/update-rectangle-button";

import producerHero1 from "../../assets/images/producer-image-hero-1.svg";
import producerHero2 from "../../assets/images/producer-image-hero-2.svg";
import producerHero3 from "../../assets/images/producer-image-hero-3.svg";
import Navbar from "@/components/navbar";

export default function ProducerLandingPage() {
  const images = [producerHero1, producerHero2, producerHero3];

  return (
    <div className="bg-white">
      <main className="flex flex-col">
        <section className="flex hero-section lg:h-screen bg-semantic-secondary-900">
          <Navbar />

          <div className="relative self-center max-w-[1280px] h-full container px-12 sm:px-24 py-16 flex flex-col gap-y-8 lg:gap-y-24">
            <div className="hero-box z-10">
              <div className="hero-container">
                <div className="flex-col lg:flex-row">
                  <div className="flex-1 text-container">
                    <h1 className="big-header-normal text-white xl:text-7xl max-w-screen-md">
                      FOR{" "}
                      <span className="big-header-wide xl:text-7xl">
                        PRODUCERS
                      </span>
                      <br></br> BY PRODUCERS
                    </h1>

                    <p className="hero-subtext max-w-screen-md sm:text-3xl">
                      Refine your product for a better food system
                    </p>
                    <DynamicRectangleButton
                      className="hero-button"
                      label="Sign Up"
                      size="lg"
                      bgColor="#FFFFFF"
                      textColor="#11639A"
                      iconColor="#11639A"
                      noOutline
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center sm:self-end lg:absolute right-0 -z-0">
              <Carousel images={images} />
            </div>
          </div>
          <div className="banner-wrapper">
            <ForkBanner />
          </div>
        </section>
        {/* EXPERIENCED PROFESSIONALS SECTION */}

        <section className="flex justify-center bg-semantic-accent-100 z-10">
          <div className="max-w-[1280px] container px-12 sm:px-24 py-16 flex flex-col gap-y-24">
            <div className="flex flex-col gap-y-5">
              <h2 className="big-header-normal text-semantic-accent-900">
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

        {/* 
          
          BACKED BY DATA SECTION 
          
        */}

        <section className="relative flex justify-center bg-semantic-secondary-700">
          <div className="relative max-w-[1280px] container flex flex-col items-start gap-y-5 px-12 sm:px-24 py-16 ">
            <h2 className="big-header-normal text-semantic-secondary-900 z-10">
              BACKED BY DATA <br></br>FUELED BY{" "}
              <span className="big-header-wide">PASSION</span>
            </h2>

            <p className="max-w-screen-sm text-white z-10">
              Standing out in this competitive space requires understanding what
              customers value and how they define quality. With Feedback, you’ll
              gain these insights—and a clearer path to success.
            </p>
            <DataBox />
            <Image
              className="hidden absolute -bottom-28 -right-28 sm:block z-0"
              src={personWithMegaphone}
              alt="a chef with tattoos holding a megaphone to their mouth with their mouth open"
              height={750}
              width={1000}
            />
          </div>
          <Image
            className="hidden sm:absolute top-0 -right-0 xl:block z-0"
            src={chocolateBackground}
            alt="a chocolate bar broken into pieces"
            height={500}
            width={575}
          />
          <Image
            className="block absolute -top-24 md:top-0 -right-16 xl:hidden z-0"
            src={chocolateBackground}
            alt="a chocolate bar broken into pieces"
            height={250}
            width={350}
          />
        </section>

        {/*
         
         PRICING PLANS SECTION
         
        */}
        <section className="flex justify-center bg-semantic-secondary-400 z-10">
          <div className="max-w-[1280px] container px-12 sm:px-24 py-16 flex flex-col gap-y-14">
            <h2 className="big-header-normal w-max text-semantic-accent-900">
              PRICING <span className="big-header-wide">PLANS</span>
            </h2>
            <div className="flex flex-col flex-wrap items-center lg:items-start gap-y-24 lg:flex-row md:gap-x-8">
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
                title="Meal"
                evaluationCost={349}
                accentColor="dark-purple"
                mostPopularOption
                headerIcon={<ForkAndKnifeIcon />}
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
                title="Feast"
                evaluationCost={569}
                accentColor="dark-blue"
                headerIcon={<SilverwareIcon />}
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

            <button className="border-2 border-black w-full self-center btn btn-primary sm:w-[21rem] bg-semantic-accent-900 text-semantic-accent-100 text-xl shadow-[1px_2px_0px_0px_#000,_1px_4px_0px_0px_#000]">
              Get Started
              <ArrowRightIcon height={15} width={15} fill="#e0d9e1" />
            </button>
          </div>
        </section>
        <section>
          <div>
            <FAQSPage />
          </div>
        </section>
      </main>
    </div>
  );
}
