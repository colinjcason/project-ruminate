import '../globals.css';
import Divider from '@/components/Divider';
import React from 'react';
import Image from 'next/image';
import cuttingboard from '../../public/assets/cuttingboard.png'; 

const items = [
  { title: 'Objective', description: 'Evaluators give honest, helpful insights without sugarcoating or bias.' },
  { title: 'Experienced', description: 'Each evaluator has years of industry experience, ensuring top-tier feedback.' },
  { title: 'Detailed', description: 'We analyze every aspect of your product, from packaging to consumer appeal.' },
  { title: 'Actionable', description: 'You receive clear recommendations that drive real improvements.' },
  { title: 'Supportive', description: 'We guide you through the process to help your product succeed.' }
];

export default function WhyChooseUs() {
  return (
    <div className="why-choose-us-container">
      <main className="flex">
        {/* Left Side Content (2/3 of the screen) */}
        <div className="content-container">
          <h2 className="big-header-normal">
            WHY CHOOSE<br />
            <span className="big-header-wide">FEEDBACK</span>
          </h2>
          <p className="description-text">
            Our evaluators are seasoned experts in retail, grocery, wholesale, and consulting. Each one represents years of experience and a deep understanding of customer preferences and buying behavior.
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
        <Image
            src="/assets/img/cuttingboard.png" // No need to import, just use the path
            alt="cutting board"
            className="cuttingboard-image"
            width={1530}
            height={840}
/>
      </main>
    </div>
  );
}
