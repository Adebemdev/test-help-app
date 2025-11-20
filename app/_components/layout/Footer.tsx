import Image from 'next/image';
import Link from 'next/link';
import facebook from '@/public/facebook.svg';
import whatsapp from '@/public/whatsapp.svg';
import linkedInLogo from '@/public/linkedIn.svg';
export default function Footer() {
  return (
    <footer className="bg-[#42114A] py-12 px-4">
      <div className="flex flex-col gap-10">
        <p className="font-lato font-medium text-2xl italic text-white leading-[100%]">
          Always your <br /> Help in Need
        </p>
        <div className="flex gap-8 mb-12">
          <Link href="/">
            <Image
              src={facebook}
              alt="facebook logo"
              width={50}
              height={50}
              quality={100}
            />
          </Link>
          <Link href="/">
            <Image
              src={linkedInLogo}
              alt="LinkedIn logo"
              width={50}
              height={50}
              quality={100}
            />
          </Link>
          <Link href="/">
            <Image
              src={whatsapp}
              alt="WhatSapp logo"
              width={50}
              height={50}
              quality={100}
            />
          </Link>
        </div>
      </div>
      <div className=" flex items-start flex-col gap-8 p-2">
        <div className="flex flex-col gap-4">
          <h4 className="font-lato font-semibold text-xl leading-[100%] text-white">
            United States
          </h4>
          <p className="flex flex-col font-lato font-semibold text-base text-[#D9D9D9]">
            <span>2321 Taylor, Park Dr. #1049</span>{' '}
            <span>Reynoldsburg OH, 43068</span>
          </p>
        </div>
        <div className="flex flex-col  gap-4">
          <h4 className="font-lato font-semibold text-xl leading-[100%] text-white">
            Lagos, Nigeria
          </h4>
          <p className="flex flex-col font-lato font-semibold text-base text-[#D9D9D9]">
            <span>Yaba , Lagos State</span>
            <span>+23408054648121</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-lato font-semibold text-xl leading-[100%] text-white">
            Subscribe to our newsletter
          </h4>
          <div className=" bg-red-600 flex w-full">
            <div className="bg-blue-600">
              <input
                name="email"
                type="email"
                id="email"
                placeholder="Enter email here ..."
                className="p-4"
              />
            </div>
            <div className="bg-white px-4 py-4 flex items-center">
              <span className="text-primary font-lato font-bold text-base">
                Subscribe
              </span>
            </div>
          </div>
          <p className="font-lato font-medium leading-[100%] text-base text-white">
            Admin@Helpappafrica.com
          </p>
        </div>
      </div>
    </footer>
  );
}
