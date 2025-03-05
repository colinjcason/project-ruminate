import Link from "next/link";

  return (
    <div className="bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link href="/producer-landing-page">Go to producers landing page</Link>
      </main>
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
