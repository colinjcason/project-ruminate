import Image from "next/image";
import Link from "next/link";
import DynamicRectangleButton from "../components/buttons/update-rectangle-button";
import Navbar from "../components/navbar";
import { Carousel } from "../components/ui/carousel";
import FAQSPage from "./FAQS/page";
import FeedkcabLogo from "../components/logo/FeedkcabLogo";
import ForkBanner from "../components/fork-banner";

export default function Page() {
  const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intersect-tUDXbq1y0oySeKjP0jcoZvCf31hIua.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intersect-tUDXbq1y0oySeKjP0jcoZvCf31hIua.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intersect-tUDXbq1y0oySeKjP0jcoZvCf31hIua.png",
  ];

  return (
    <div className="homepage">
      <Navbar />

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <div className="text-container">
                <h1 className="hero-heading">
                  <span className="hero-for">FOR</span>
                  <span className="hero-producers">PRODUCERS</span>
                </h1>
                <h2 className="hero-by">BY PRODUCERS</h2>
                <p className="hero-subtext">
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
              <div className="carousel-container">
                <Carousel images={images} />
              </div>
            </div>
          </div>
        </section>
        <div className="banner-wrapper">
          <ForkBanner />
        </div>
      </main>

      <section>
        <div>
          <FAQSPage />
        </div>
      </section>
    </div>
  );
}



// import Image from "next/image";
// import Link from "next/link";
// import DynamicRectangleButton from "../components/buttons/update-rectangle-button";
// import Navbar from "../components/navbar";
// import { Carousel } from "../components/ui/carousel";
// import FAQSPage from "./FAQS/page";
// import FeedkcabLogo from "../components/logo/FeedkcabLogo";
// import ForkBanner from "../components/fork-banner"; 

// export default function Page() {
//   const images = [
//     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intersect-tUDXbq1y0oySeKjP0jcoZvCf31hIua.png",
//     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intersect-tUDXbq1y0oySeKjP0jcoZvCf31hIua.png",
//     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intersect-tUDXbq1y0oySeKjP0jcoZvCf31hIua.png",
//   ];

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />

//       <main className="flex-1 relative bg-[#11639A] overflow-hidden">
//         <section className="pt-[52px]">
//           <div className="flex flex-col items-start w-[1280px] pb-5 pt-16 gap-[52px] mx-auto">
//             <div className="flex items-start gap-[-40px] self-stretch">
//               <div className="flex-1 pr-8">
//                 <h1 className="text-white">
//                   <span className="block text-12 font-extrabold tracking-wide leading-none whitespace-nowrap ">
//                     FOR PRODUCERS
//                   </span>
//                   <span className="block text-12 font-[1000] tracking-wide leading-none mt-3 whitespace-nowrap">
//                     BY PRODUCERS
//                   </span>
//                 </h1>
//                 <p className="text-6 text-white font-normal leading-9 mt-8">
//                   Refine your product for a better food system
//                 </p>
//                 <div className="mt-8">
//                   <DynamicRectangleButton
//                     label="Sign Up"
//                     size="lg"
//                     bgColor="#FFFFFF"
//                     textColor="#11639A"
//                     iconColor="#11639A"
//                     noOutline
//                   />
//                 </div>
//               </div>
//               <div className="flex-1 relative py-[52px] -mr-[265px]">
//                 <Carousel images={images} />
//               </div>
//             </div>
//           </div>
//         </section>
//         <div className="pb-[20px]">
//         <ForkBanner />
//         </div>
//       </main>

//       <section>
//         <div>
//           <FAQSPage />
//         </div>
//       </section>
//     </div>
//   );
// }
