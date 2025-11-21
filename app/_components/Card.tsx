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
    <div className="flex  px-4 mb-6 items-start w-full ">
      {/* Number (Mobile Only) */}
      <p className="md:hidden h-10 w-10 rounded-full border border-[#e6e6e685] flex items-center justify-center bg-white shrink-0">
        {number}
      </p>

      {/* Content */}
      <div className="flex flex-col">
        <h3 className="font-lato text-2xl font-extrabold leading-tight text-black">
          {title}
        </h3>

        <p className="text-[#8A8A8A] font-semibold text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
