import Image from "next/image";
import qrCode from "@/public/qrcode-img.png";
import everyImage from "@/public/every-image.svg";
export default function EverySection() {
  return (
    <section className="bg-[#FAF9F8] py-16">
      <div className=" flex items-center justify-center flex-col ">
        <h1 className="font-lato font-extrabold text-[#000000] text-3xl text-center leading-9  mb-6 md:w-[540px]">
          Everyday Life Made <br /> Easier
        </h1>
        <div className=" w-full flex items-center justify-center">
          <p className="w-[300px] text-center tracking-tight font-lato text-lg leading-6 text-[#545454] mb-8 md:w-[500px]">
            No more calling random numbers or begging neighbors for help. Just a{" "}
            <span className="italic">scroll</span> and a{" "}
            <span className="italic">click</span>, a verified expert is already
            on the way
          </p>
        </div>
        <div className="flex items-center flex-col justify-center gap-4 mb-8">
          <div className="bg-white p-6 h-40 w-40 flex items-center justify-center border-[0.75px] border-[#E6E6E6] shadow-sm rounded-[5px]">
            {/* <Image
              src={qrCode}
              alt="The QRcode image"
              width={100}
              height={100}
              quality={100}
              className=""
            /> */}

            <Image
              src="https://backend-api.helpappafrica.com/public/qrcode.png"
              alt="QR Code"
              width={130}
               
              height={130}
              
          
            />
          </div>

          <div className="">
            <span className="text-mainColor font-lato font-bold capitalize text-lg italic h-[19px] w-[123px]">
              Scan to download
            </span>
          </div>
        </div>
        <div className=" w-full h-full md:w-1/2 md:h-1/2">
          <Image
            src={everyImage}
            alt="EVery Image"
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
