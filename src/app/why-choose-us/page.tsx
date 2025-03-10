import "../globals.css";
import Divider from "@/components/Divider";
import React from "react";

const items = [
  {
    title: "Objective",
    description:
      "Evaluators give honest, helpful insights without sugarcoating or bias.",
  },
  {
    title: "Targeted",
    description:
      "Reach evaluators outside your immediate circle, including specific geographic regions.",
  },
  {
    title: "Timely",
    description:
      "Get feedback when you’re ready—no need to wait for annual events.",
  },
  {
    title: "Thorough",
    description: "Our team organizes raw data into clear, actionable insights.",
  },
  {
    title: "Representative",
    description:
      "Evaluators reflect not just their expertise but also the preferences of their customer base.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="flex">
        <div className="content-container">
          <h2 className="big-header-normal">
            WHY CHOOSE
            <br />
            <span className="big-header-wide">FEEDBACK</span>
          </h2>
          <p className="description-text">
            Many producers rely on personal networks or annual trade shows for
            feedback. Feedback offers a better way—providing reviews that are:
          </p>

          {/* Divider Sections */}
          <div className="flex flex-col gap-y-12">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col gap-y-4">
                {/* Top Divider */}
                <Divider index={index} />

                {/* Section Content: Title on Left, Description on Right */}
                <div className="section-content">
                  <h3 className="divider-title">{item.title}</h3>
                  <p className="divider-description">{item.description}</p>
                </div>
              </div>
            ))}
            {/* Final Divider */}
            <Divider index={items.length} />
          </div>
        </div>

        {/* Right Side Image (1/3 of the screen) */}
        {/* <Image
            src="/assets/img/cuttingboard.png" // No need to import, just use the path
            alt="cutting board"
            className="cuttingboard-image"
            width={1530}
            height={840}
            /> */}

        <div className="cuttingboard-image">
          <video autoPlay loop muted playsInline className="video-content">
            <source
              src="/assets/videos/rotating_cheese_knife.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* <Image
            src="/assets/img/cut-cheese.png"
            alt="cheese"
            className="cheese-image"
            width={318}
            height={308}
          />
      
          <Image
            src="/assets/img/knife.png"
            alt="knife"
            className="knife-image"
            width={246}
            height={592}
          /> */}
      </div>
    </section>
  );
}
