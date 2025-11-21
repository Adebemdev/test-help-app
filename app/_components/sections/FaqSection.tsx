import Image from 'next/image';
import DownLoapApp from '../DownLoadApp';
import FaqToggle from '@/app/_components/FaqToggle';
import apple from '@/public/apple-img.svg';
import google from '@/public/google-play-image.svg';
import qrCode from '@/public/qrcode-img.png';
export default function FaqSection() {
  return (
    <section className="bg-[#FAF9F8] pt-16 flex flex-col items-center border-b-4 border-[#E6E6E6] ">
      <div className="mb-6 bg-amber-500">
        <h2 className="font-lato text-3xl font-extrabold leading-[100%] mb-4 md:text-[64px]">
          You Have Questions ?
        </h2>
        <p className="font-lato text-xl font-semibold text-center leading-[100%]">
          We have answers for you ...
        </p>
        <div className="hidden md:flex items-center flex-col justify-center gap-4 md:flex-row">
          <div className="bg-white p-6 h-40 w-40 flex items-center justify-center border-[0.75px] border-[#E6E6E6] shadow-sm rounded-[5px]">
            <Image
              src={qrCode}
              alt="The QRcode image"
              width={100}
              height={100}
              quality={100}
              className=""
            />
          </div>
          <div className="py-6 md:flex md:items-center md:justify-center md:flex-row">
            <span className="text-primary capitalize text-lg italic h-[19px] w-[123px]">
              Scan to download
            </span>
            <DownLoapApp
              playStore={{ icon: google, alt: 'Google Play Icon', size: 20 }}
              appStore={{ icon: apple, alt: 'Google Play Icon', size: 20 }}
            />
          </div>
        </div>
      </div>
      {/* Foundation /primary /primary -300 */}
      <div className="bg-linear-to-b from-white to-[#EEECE8] w-full">
        <FaqToggle
          question="What is Help App all about ?"
          answer="Help App Africa is a platform that connects you with your nearest local service providers. Whether you need a plumber, electrician, cleaner, or any other professional, Help App Africa makes it easy to find and book reliable service providers."
          defaultOpen
        />
        <FaqToggle
          question="Is Help App currently in my city ?"
          answer="Help App Africa is a platform that connects you with your nearest local service providers. Whether you need a plumber, electrician, cleaner, or any other professional, Help App Africa makes it easy to find and book reliable service providers."
        />
        <FaqToggle
          question="How can i book a service provider ?"
          answer="Help App Africa is a platform that connects you with your nearest local service providers. Whether you need a plumber, electrician, cleaner, or any other professional, Help App Africa makes it easy to find and book reliable service providers."
        />
        <FaqToggle
          question="Can i register as a provider on the platform ?"
          answer="Help App Africa is a platform that connects you with your nearest local service providers. Whether you need a plumber, electrician, cleaner, or any other professional, Help App Africa makes it easy to find and book reliable service providers."
        />
      </div>
    </section>
  );
}
