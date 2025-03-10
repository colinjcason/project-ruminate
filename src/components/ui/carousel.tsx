"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
  interval?: number;
}

export function Carousel({ images, interval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative carousel-container w-[465px] h-[500px]">
      {/* Image Container */}
      <div className="relative overflow-visible">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src || "/placeholder.svg"}
              alt="Food producer"
              height={500}
              width={465}
              className="object-contained object-top" // Negative margin to allow head overflow
              priority
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`carousel-dot ${
              index === currentIndex ? "active-dot" : "inactive-dot"
            }`}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export const CarouselContent = () => null;
export const CarouselItem = () => null;
export const CarouselPrevious = () => null;
export const CarouselNext = () => null;

// "use client"

// import { useEffect, useState } from "react"
// import Image from "next/image"

// interface CarouselProps {
//   images: string[]
//   interval?: number
// }

// export function Carousel({ images, interval = 10000 }: CarouselProps) {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((current) => (current + 1) % images.length)
//     }, interval)

//     return () => clearInterval(timer)
//   }, [images.length, interval])

//   return (
//     <div className="relative w-[541.091px] h-[499.311px] mr-[-100px] mt-[-30px]">
//       {/* Background blob */}
//       <svg
//         className="absolute right-0 top-0"
//         width="541"
//         height="494"
//         viewBox="0 0 541 494"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           fillRule="evenodd"
//           clipRule="evenodd"
//           d="M297.062 1.50749C346.893 -9.34834 408.554 40.8673 446.534 73.9376C485.155 107.566 449.686 172.253 466.439 219.858C483.621 268.685 545.523 299.269 543.971 350.831C542.323 405.609 510.073 465.847 458.368 488.129C407.037 510.251 352.914 463.153 297.062 457.237C250.338 452.289 130.539 481.977 91.086 457.237C51.3608 432.327 155.743 369.054 139.527 326C122.553 280.933 72.0473 206.669 91.086 162.383C110.231 117.849 143.178 132.082 186.648 108.521C235.546 73.2341 256.123 10.4261 297.062 1.50749Z"
//           fill="#A3CDD3"
//         />
//       </svg>

//       {/* Images */}
//       <div className="relative w-full h-full overflow-visible">
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-500 ${
//               index === currentIndex ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <Image
//               src={src || "/placeholder.svg"}
//               alt="Food producer"
//               fill
//               className="object-contain -mt-16" // Negative margin to allow head overflow
//               priority
//             />
//           </div>
//         ))}
//       </div>

//       {/* Dots */}
//       <div className="absolute bottom-8 right-8 flex gap-2 z-20">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className="w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             style={{
//               backgroundColor: index === currentIndex ? "#86B8C8" : "#989AA2",
//             }}
//           >
//             <span className="sr-only">Slide {index + 1}</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   )
// }

// export const CarouselContent = () => {
//   return null
// }

// export const CarouselItem = () => {
//   return null
// }

// export const CarouselPrevious = () => {
//   return null
// }

// export const CarouselNext = () => {
//   return null
// }
