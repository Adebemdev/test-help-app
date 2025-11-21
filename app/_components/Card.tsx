'use client';

export interface CardProps {
  number: number;
  title: string;
  description: string;
}

// export default function Card({ number, title, description }: CardProps) {
//   return (
//     <div className="flex flex-row justify-center items-start gap-2 px-4">
//       <div className="w-1/4 h-1/4 flex items-center justify-center">
//         <p className="md:hidden h-10 w-10 rounded-full border border-[#e6e6e685] flex items-center bg-[#FFFFFF] justify-center">
//           {number}
//         </p>
//       </div>
//       <div className=" flex flex-col mb-6 bg-amber-600 md:w-[38]">
//         <h3 className="font-lato p-1 text-2xl text-black font-extrabold leading-[100%]">
//           {title}
//         </h3>
//         <p className="text-[#8A8A8A] font-semibold text-[16px]">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }

export interface CardProps {
  number: number;
  title: string;
  description: string;
}

export default function Card({ number, title, description }: CardProps) {
  return (
    <div className=" h-40 w-full flex">
      {/* Number (Mobile Only) */}
      <p className="md:hidden h-10 w-10 rounded-full border border-[#e6e6e6] mx-4
       flex items-center justify-center bg-white shrink-0 font-lato text-[19.2px]" >
        {number}
      </p>

      {/* Content */}
      <div className="">
        <h3 className="font-lato text-2xl font-extrabold leading-tight md:mb-6 mb-4 text-black">
          {title}
        </h3>

        <p className="text-[#8A8A8A] font-semibold text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
