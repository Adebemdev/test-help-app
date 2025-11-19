import Image from 'next/image';
import google from '@/public/google-play-image.svg';
import apple from '@/public/apple-img.svg';
import heroImageOne from '@/public/hero-img-1.svg';
import heroImageTwo from '@/public/hero-img-2.svg';
import heroImageThree from '@/public/hero-img-3.svg';
import heroImageFour from '@/public/hero-img-4.svg';
export default function HeroSection() {
  return (
    <section className="bg-linear-to-b from-white to-greyColor py-16 px-8">
      <div className="flex flex-col items-center justify-center">
        <p className="font-instrument-serif text-2xl italic leading-0 text-center font-normal capitalize p-4 mb-4 text-[#545454]">
          Save time, save Energy
        </p>
        <h1 className="font-lato text-4xl text-[#000000]  text-center w-[312px] font-extrabold leading-10 mb-4 md:w-[250px]">
          Always your help in need
        </h1>
        <p className="w-[324px] text-center  font-lato text-lg leading-6 text-[#545454] md:w-[350px]">
          Instant access to trusted professional service providers anytime you
          need them
        </p>
      </div>
      <div className="flex  w-full items-center justify-center my-8">
        <div className="inline-flex items-center gap-4 rounded-full border border-[#E6E6E6] bg-white px-4 py-2 shadow-sm">
          <div className="flex items-center gap-1  justify-center">
            <span className="text-sm font-extrabold text-primary/60 italic">
              Download App
            </span>
            <Image
              src="/arrow-1.svg"
              alt="App image"
              width={20}
              height={20}
              className="h-4 w-4"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className=" rounded-full flex items-center justify-center border border-[#E6E6E6] p-2">
              <Image
                src={google}
                alt="Google Image"
                height="20"
                quality={100}
                width="20"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className=" rounded-full p-2 flex items-center justify-center border border-[#E6E6E6]">
              <Image
                src={apple}
                alt="Apple Image"
                height="50"
                quality={100}
                width="50"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image layout */}
      <div className="flex flex-col gap-6 md:flex-row">
        <div className=" overflow-hidden h-full w-full">
          <Image
            src={heroImageOne}
            quality={100}
            width={100}
            height={100}
            alt="Hero image one"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="overflow-hidden h-full w-full">
          <Image
            src={heroImageTwo}
            width={100}
            height={100}
            alt="Hero image one"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="overflow-hidden h-full w-full">
          <Image
            src={heroImageThree}
            width={100}
            height={100}
            alt="Hero image one"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="overflow-hidden h-full w-full">
          <Image
            src={heroImageFour}
            width={100}
            height={100}
            alt="Hero image one"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
