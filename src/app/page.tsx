import Image from "next/image";
import Link from "next/link";
import DynamicRectangleButton from "../components/buttons/update-rectangle-button";
import Navbar from "../components/navbar";
import { Carousel } from "../components/ui/carousel";
import FAQSPage from "./FAQS/page";
import FeedkcabLogo from "../components/logo/FeedkcabLogo";

export default function Page() {
  const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intersect-tUDXbq1y0oySeKjP0jcoZvCf31hIua.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intersect-tUDXbq1y0oySeKjP0jcoZvCf31hIua.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intersect-tUDXbq1y0oySeKjP0jcoZvCf31hIua.png",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 relative bg-[#11639A] overflow-hidden">
        <section className="pt-[52px]">
        <div className="flex flex-col items-start w-[1280px] pb-5 pt-16 gap-[52px] mx-auto">
          
          <div className="flex items-start gap-[-40px] self-stretch">
            <div className="flex-1 pr-8">
              <h1 className="text-white">
                <span className="block text-12 font-extrabold tracking-wide leading-none whitespace-nowrap ">
                  FOR PRODUCERS
                </span>
                <span className="block text-12 font-[1000] tracking-wide leading-none mt-3 whitespace-nowrap">
                  BY PRODUCERS
                </span>
              </h1>
              <p className="text-6 text-white font-normal leading-9 mt-8">
                Refine your product for a better food system
              </p>
              <div className="mt-8">
                <DynamicRectangleButton
                  label="Sign Up"
                  size="lg"
                  bgColor="#FFFFFF"
                  textColor="#11639A"
                  iconColor="#11639A"
                  noOutline
                />
              </div>
            </div>
            <div className="flex-1 relative py-[52px] -mr-[265px]">
              <Carousel images={images} />
            </div>
          </div>
        </div>
    </section>
    <section className="mt-[52px]">
        <div className="absolute bottom-0 w-full bg-[#F2FCF7] h-[50px] flex items-center">
          <div className="flex animate-marquee whitespace-nowrap font-sans text-xs font-semibold text-[#563058]">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center mx-4">
                <span className="flex justify-between items-center w-[135px] h-[50px] px-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon%20(fork)-XmpTruN9sa7vaquTC3TMtv2HQ65hI0.svg"
                    alt="Fork icon"
                    width={20}
                    height={20}
                  />
                  <span className="mx-2">ethical</span>
                  <div className="w-5 h-5" />
                </span>
                <span className="flex justify-between items-center w-[135px] h-[50px] px-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon%20(knife)-BQXURqidS7TKBfEEsryXbx6z2hBYnn.svg"
                    alt="Knife icon"
                    width={20}
                    height={20}
                  />
                  <span className="mx-2">equitable</span>
                  <div className="w-5 h-5" />
                </span>
                <span className="flex justify-between items-center w-[135px] h-[50px] px-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon%20(spoon)-ess3bqfzm3xgIL9sgOjRIgYzkiiQDC.svg"
                    alt="Spoon icon"
                    width={20}
                    height={20}
                  />
                  <span className="mx-2">sustainable</span>
                  <div className="w-5 h-5" />
                </span>
              </div>
            ))}
          </div>
        </div>
        </section>
      </main>

      <section>
        <div>
          <FAQSPage />
        </div>
      </section>
    </div>
  );
}


// import Image from "next/image"
// import Link from "next/link"
// import DynamicRectangleButton from "../components/buttons/update-rectangle-button";
// // import { Logo } from "../components/ui/logo"
// import FLogo from "../components/logo/Flogo"
// import { Carousel } from "../components/ui/carousel"
// import FAQSPage from "./FAQS/page";




// export default function Page() {
//   const images = [
//     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intersect-tUDXbq1y0oySeKjP0jcoZvCf31hIua.png",
//     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intersect-tUDXbq1y0oySeKjP0jcoZvCf31hIua.png",
//     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intersect-tUDXbq1y0oySeKjP0jcoZvCf31hIua.png",
//   ]

//   return (
//     <div className="min-h-screen flex flex-col">
//       <header className="h-[68px] border-b-2 border-black bg-white">
//         <div className="container mx-auto px-[50px] h-full flex justify-between items-center">
//           <Link href="/" className="text-2xl font-bold">
//             <FLogo />
//           </Link>
//           <div className="hidden md:flex items-center gap-8">
//             {["About Us", "How it Works", "Pricing"].map((item) => (
//               <Link
//                 key={item}
//                 href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
//                 className="text-[#000000] font-sans text-2 font-normal leading-5 hover:text-gray-600"
//               >
//                 {item}
//               </Link>
//             ))}
//           </div>
//           <div className="flex items-center gap-4">
//             <Link href="/login" className="text-[#000000] font-sans text-2 font-normal leading-5 hover:text-gray-600">
//               Log In
//             </Link>
//             <span className="text-[#000000]">|</span>
//             <Link href="/signup" className="text-[#000000] font-sans text-2 font-normal leading-5 hover:text-gray-600">
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </header>

//       <main className="flex-1 relative bg-[#11639A] overflow-hidden">
//         <div className="flex flex-col items-start w-[1280px] pb-5 pt-16 gap-[52px] mx-auto">
//           <div className="flex items-start gap-[-40px] self-stretch">
//             <div className="flex-1 pr-8">
//               <h1 className="text-white">
//                 <span className="block text-12 font-extrabold tracking-wide leading-none whitespace-nowrap">
//                   FOR PRODUCERS
//                 </span>
//                 <span className="block text-12 font-[1000] tracking-wide leading-none mt-3 whitespace-nowrap">
//                   BY PRODUCERS
//                 </span>
//               </h1>
//               <p className="text-6 text-white font-normal leading-9 mt-8">
//                 Refine your product for a better food system
//               </p>
//               <div className="mt-8">
//                 <DynamicRectangleButton
//                   label="Sign Up"
//                   size="lg"
//                   bgColor="#FFFFFF"
//                   textColor="#11639A"
//                   iconColor="#11639A"
//                   noOutline
//                 />
//               </div>
//             </div>
//             <div className="flex-1 relative">
//               <Carousel images={images} />
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-0 w-full bg-[#F2FCF7] h-[50px] flex items-center">
//           <div className="flex animate-marquee whitespace-nowrap font-sans text-xs font-semibold text-[#563058]">
//             {[...Array(4)].map((_, i) => (
//               <div key={i} className="flex items-center mx-4">
//                 <span className="flex justify-between items-center w-[135px] h-[50px] px-4">
//                   <Image
//                     src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon%20(fork)-XmpTruN9sa7vaquTC3TMtv2HQ65hI0.svg"
//                     alt="Fork icon"
//                     width={20}
//                     height={20}
//                   />
//                   <span className="mx-2">ethical</span>
//                   <div className="w-5 h-5" /> {/* Spacer to balance the icon */}
//                 </span>
//                 <span className="flex justify-between items-center w-[135px] h-[50px] px-4">
//                   <Image
//                     src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon%20(knife)-BQXURqidS7TKBfEEsryXbx6z2hBYnn.svg"
//                     alt="Knife icon"
//                     width={20}
//                     height={20}
//                   />
//                   <span className="mx-2">equitable</span>
//                   <div className="w-5 h-5" /> {/* Spacer to balance the icon */}
//                 </span>
//                 <span className="flex justify-between items-center w-[135px] h-[50px] px-4">
//                   <Image
//                     src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon%20(spoon)-ess3bqfzm3xgIL9sgOjRIgYzkiiQDC.svg"
//                     alt="Spoon icon"
//                     width={20}
//                     height={20}
//                   />
//                   <span className="mx-2">sustainable</span>
//                   <div className="w-5 h-5" /> {/* Spacer to balance the icon */}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
     
//       </main>

//       <section>
//           <div>
//             <FAQSPage />

//             </div>
//         </section>


//     </div>
//   )
// }

