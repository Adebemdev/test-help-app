import Image from 'next/image';
import google from '@/public/google-play-image.svg';
import apple from '@/public/apple-img.svg';
import DownLoapApp from '@/app/_components/DownLoadApp';
import Link from 'next/link';
import whatsappImg from '@/public/hero-whatsapp.svg';
import heroImageOne from '@/public/hero-img-1.svg';
import heroImageTwo from '@/public/hero-img-2.svg';
import heroImageThree from '@/public/hero-img-3.svg';
import heroImageFour from '@/public/hero-img-4.svg';
export default function HeroSection() {
  return (
    <section className="bg-linear-to-b from-white to-greyColor  px-8 md:py-10 md:px-18 relative">
      <div className="flex flex-col items-center justify-center  md:mt-2">
        <p className="font-instrument-serif text-2xl italic leading-0 text-center font-normal capitalize pt-8 mb-8  text-[#545454] md:mx-2">
          Save time, save Energy
        </p>
        <h1 className="font-lato text-4xl text-[#000000]  text-center w-[312px] font-extrabold leading-10 mb-4 md:w-6xl md:mb-4">
          Always your help in need
        </h1>
        <p className="w-[324px] text-center  font-lato text-lg leading-6 text-[#545454] md:w-xl">
          Instant access to trusted professional service providers anytime you
          need them
        </p>
      </div>
      <DownLoapApp
        playStore={{ icon: google, alt: 'Google Play Icon', size: 20 }}
        appStore={{ icon: apple, alt: 'Google Play Icon', size: 20 }}
      />

      {/* Image layout */}
      <div className="flex flex-col gap-6 md:flex-row">
        <div className=" overflow-hidden h-full w-full">
          <Image
            src={heroImageOne}
            quality={100}
            width={70}
            height={70}
            alt="Hero image one"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="overflow-hidden h-full w-full">
          <Image
            src={heroImageTwo}
            width={70}
            height={70}
            quality={100}
            alt="Hero image one"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="overflow-hidden h-full w-full">
          <Image
            src={heroImageThree}
            width={70}
            height={70}
            quality={100}
            alt="Hero image one"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="overflow-hidden h-full w-full">
          <Image
            src={heroImageFour}
            width={70}
            height={70}
            quality={100}
            alt="Hero image one"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <Link
        href="/register"
        className="overflow-hidden z-50 fixed bottom-8 -right-[0.8px]"
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
