import Image from 'next/image';
import google from '@/public/google-play-image.svg';
import apple from '@/public/apple-img.svg';
import DownLoapApp from '@/app/_components/DownLoadApp';
import Link from 'next/link';
import whatsappImg from '@/public/hero-whatsapp.svg';
import heroImageOne from '@/public/assets/hero-img-1.svg';
import heroImageTwo from '@/public/assets/hero-img-2.svg';
import heroImageThree from '@/public/assets/hero-img-3.svg';
import heroImageFour from '@/public/assets/hero-img-4.svg';
export default function HeroSection() {
  return (
    <section className="bg-linear-to-b from-white to-greyColor px-[43px] py-[32px] relative md:px-[100px] md:py-[100px]">
      <div className="flex flex-col items-center justify-center  md:mt-2 ">
        <p className="font-instrument-serif text-2xl italic leading-0 text-center font-normal capitalize pt-[50px] mb-[24px] text-[#545454] md:mx-2 md:text-[40px] md:mb-[32px]">
          Save time, save Energy
        </p>
        <h1 className="font-lato text-4xl text-[#000000]  text-center w-[312px] font-extrabold leading-10 mb-[16px] md:w-6xl md:mb-[32px] md:text-[64px] md:leading-[100%]">
          Always your help in need
        </h1>
        <p className="w-[324px] text-center mb-[32px] font-lato text-lg leading-6 text-[#545454] md:w-xl md:text-[28px] md:mb-[48px] md:-tracking-[1%] md:leading-[100%]">
          Instant access to trusted professional service providers anytime you
          need them
        </p>
      </div>
      <div className="md:flex md:justify-center">
        <DownLoapApp
          playStore={{ icon: google, alt: 'Google Play Icon', size: 20 }}
          appStore={{ icon: apple, alt: 'Google Play Icon', size: 20 }}
        />
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
            className="w-[307px] h-[286px] mx-auto md:w-[279px] md:h-[267px]"
          />
        </div>
        <div className=" overflow-hidden h-full w-full">
          <Image
            src={heroImageTwo}
            width={100}
            height={100}
            quality={100}
            alt="Hero image one"
            className="w-[307px] h-[286px] mx-auto md:w-[279px] md:h-[267px]"
          />
        </div>
        <div className="overflow-hidden h-full w-full">
          <Image
            src={heroImageThree}
            width={100}
            height={100}
            quality={100}
            alt="Hero image one"
            className="w-[307px] h-[286px] mx-auto md:w-[279px] md:h-[267px]"
          />
        </div>
        <div className="overflow-hidden h-full w-full">
          <Image
            src={heroImageFour}
            width={100}
            height={100}
            quality={100}
            alt="Hero image one"
            className="w-[307px] h-[286px] mx-auto md:w-[279px] md:h-[267px]"
          />
        </div>
      </div>
      <Link
        href="https://wa.me/2348054648121"
        className="fixed z-50 absolute bottom-4 right-0"
      >
        <Image
          src={whatsappImg}
          width={70}
          height={70}
          quality={100}
          alt="Hero image one"
          className="w-20 h-20"
        />
      </Link>
    </section>
  );
}
