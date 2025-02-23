import Image from "next/image"
import Link from "next/link"
import DynamicRectangleButton from "../components/buttons/update-rectangle-button";
// import { Logo } from "../components/ui/logo"
import FLogo from "../components/logo/Flogo"
import { Carousel } from "../components/ui/carousel"
import FAQSPage from "./FAQS/page";




export default function Page() {
  const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intersect-tUDXbq1y0oySeKjP0jcoZvCf31hIua.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intersect-tUDXbq1y0oySeKjP0jcoZvCf31hIua.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intersect-tUDXbq1y0oySeKjP0jcoZvCf31hIua.png",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-[68px] border-b-2 border-black bg-white">
        <div className="container mx-auto px-[50px] h-full flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <FLogo />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {["About Us", "How it Works", "Pricing"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[#000000] font-sans text-2 font-normal leading-5 hover:text-gray-600"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-[#000000] font-sans text-2 font-normal leading-5 hover:text-gray-600">
              Log In
            </Link>
            <span className="text-[#000000]">|</span>
            <Link href="/signup" className="text-[#000000] font-sans text-2 font-normal leading-5 hover:text-gray-600">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 relative bg-[#11639A] overflow-hidden">
        <div className="flex flex-col items-start w-[1280px] pb-5 pt-16 gap-[52px] mx-auto">
          <div className="flex items-start gap-[-40px] self-stretch">
            <div className="flex-1 pr-8">
              <h1 className="text-white">
                <span className="block text-12 font-extrabold tracking-wide leading-none whitespace-nowrap">
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
            <div className="flex-1 relative">
              <Carousel images={images} />
            </div>
          </div>
        </div>

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
                  <div className="w-5 h-5" /> {/* Spacer to balance the icon */}
                </span>
                <span className="flex justify-between items-center w-[135px] h-[50px] px-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon%20(knife)-BQXURqidS7TKBfEEsryXbx6z2hBYnn.svg"
                    alt="Knife icon"
                    width={20}
                    height={20}
                  />
                  <span className="mx-2">equitable</span>
                  <div className="w-5 h-5" /> {/* Spacer to balance the icon */}
                </span>
                <span className="flex justify-between items-center w-[135px] h-[50px] px-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon%20(spoon)-ess3bqfzm3xgIL9sgOjRIgYzkiiQDC.svg"
                    alt="Spoon icon"
                    width={20}
                    height={20}
                  />
                  <span className="mx-2">sustainable</span>
                  <div className="w-5 h-5" /> {/* Spacer to balance the icon */}
                </span>
              </div>
            ))}
          </div>
        </div>
     
      </main>

      <section>
          <div>
            <FAQSPage />

            </div>
        </section>


    </div>
  )
}



// 'use client'
// import Image from "next/image";
// import RectangleButton from "../components/buttons/rectangle-button";
// import SmallRectangleButton from "../components/buttons/small-rectangle-button";
// import SmallSquareButton from "../components/buttons/small-square-button";
// import LargeSquareButton from "../components/buttons/square-button";
// import DynamicRectangleButton from "../components/buttons/update-rectangle-button";
// import DynamicSquareButton from "../components/buttons/update-square-button";

// export default function HomePage() {
//   return (
//     <main className="p-6">
//       <h1 className="text-xl font-bold mb-4">Test Rectangle Button</h1>
//       {/* <RectangleButton 
//         label="Button" 
//         onClick={() => alert('Button Clicked!')} 
//       /> */}
//       <br/>
//       <SmallRectangleButton 
//         label="Button" 
//       />
//       <br/>
//        <SmallSquareButton className="mt-4" onClick={() => alert('Heart Clicked!')} />
//        <br/>
//        <RectangleButton 
//         label="Button" 
//         onClick={() => alert('Button Clicked!')} 
//       /> 
//        <br/>
//         <LargeSquareButton 
//         onClick={() => alert('Button Clicked!')} 
//       /> 
//       <br/>

//   {/* dynamic button  */}
//  <DynamicRectangleButton
//   label="Button"
//   bgColor="var(--d-color-semantic-neutral-bg, #FAF5F1)"
//   textColor="var(--d-color-semantic-neutral-content, #1F2739)"
//   iconColor="var(--d-color-semantic-neutral-content, #1F2739)"
//   outlineColor="var(--d-color-semantic-neutral-content, #1F2739)"
//   size="lg"
//   noOutline={false} // Ensure border and shadow are applied
//   className="text-xl font-bold leading-7"
//   onClick={() => console.log("Neutral Button Clicked")}
// />
// <br />
// <DynamicSquareButton
//   size="lg"
//   onClick={() => console.log("Large button clicked")}
// />
// <br />
// <DynamicSquareButton
//   size="sm"
//   bgColor="#FF5733"
//   iconColor="#FFD700"
//   outlineColor="#FF0000"
//   onClick={() => console.log("Small button clicked")}
// />
// <br />
// <DynamicSquareButton
//   size="md"
//   bgColor="#0066FF"
//   iconColor="#FFFFFF"
//   noOutline={true}
//   onClick={() => console.log("Button without outline clicked")}
// />

// <br />
// <DynamicSquareButton
//   size="lg"
//   bgColor="white"
//   iconColor="black"
//   noOutline={true} // Removes border and shadow
//   onClick={() => console.log("No-outline button clicked")}
// />
//     </main>
//   );
// }