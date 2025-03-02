// import Image from "next/image";

// const ForkBanner = () => {
//   return (
//     <div className="w-full bg-[#F2FCF7] h-[50px] flex items-center">
//       <div className="flex whitespace-nowrap font-roboto text-[12px] font-semibold leading-[12px] text-[#563058] h-[50px] px-0 items-center gap-[-32px] w-full">
//         {[...Array(4)].map((_, i) => (
//           <div key={i} className="flex items-center -ml-[32px]">
//             {/* Ethical */}
//             <div className="flex items-center justify-center w-[135px] h-[50px] px-4">
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon%20(fork)-XmpTruN9sa7vaquTC3TMtv2HQ65hI0.svg"
//                 alt="Fork icon"
//                 width={20}
//                 height={20}
//               />
//               <div className="mx-2">ethical</div>
//             </div>

//             {/* Equitable */}
//             <span className="flex items-center justify-center w-[135px] h-[50px] px-4">
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon%20(knife)-BQXURqidS7TKBfEEsryXbx6z2hBYnn.svg"
//                 alt="Knife icon"
//                 width={20}
//                 height={20}
//               />
//               <span className="mx-2">equitable</span>
//             </span>

//             {/* Sustainable */}
//             <span className="flex items-center justify-center w-[135px] h-[50px] px-4">
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon%20(spoon)-ess3bqfzm3xgIL9sgOjRIgYzkiiQDC.svg"
//                 alt="Spoon icon"
//                 width={20}
//                 height={20}
//               />
//               <span className="mx-2">sustainable</span>
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ForkBanner;

import Image from "next/image";

const ForkBanner = () => {
  return (
    <div className="w-full bg-[#F2FCF7] h-[50px] flex items-center overflow-hidden   ">
      <div className="flex h-[50px] px-0 py-[8px] items-center gap-[-32px] w-full whitespace-nowrap font-roboto text-[12px] font-semibold leading-[12px] text-[#563058]">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-[-32px]">
            {/* Fork - Ethical */}
            <div className="flex w-[135px] justify-center items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon%20(fork)-XmpTruN9sa7vaquTC3TMtv2HQ65hI0.svg"
                alt="Fork icon"
                width={20}
                height={20}
              />
              <div className="w-[135px] flex justify-center items-center">ethical</div>
            </div>

            {/* Spoon - Equitable */}
            <div className="flex w-[135px] justify-center items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon%20(spoon)-ess3bqfzm3xgIL9sgOjRIgYzkiiQDC.svg"
                alt="Spoon icon"
                width={20}
                height={20}
              />
              <div className="w-[135px] flex justify-center items-center">equitable</div>
            </div>

            {/* Knife - Sustainable */}
            <div className="flex w-[135px] justify-center items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon%20(knife)-BQXURqidS7TKBfEEsryXbx6z2hBYnn.svg"
                alt="Knife icon"
                width={20}
                height={20}
              />
              <div className="w-[135px] flex justify-center items-center">sustainable</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForkBanner;
