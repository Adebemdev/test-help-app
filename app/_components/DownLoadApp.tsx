'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
export interface StoreIcon {
  icon: StaticImageData | string;
  alt: string;
  size?: number;
}

interface DownloadAppButtonProps {
  label?: string;
  arrowIcon?: string | StaticImageData;
  playStore: StoreIcon;
  appStore: StoreIcon;
}

export default function DownLoapApp({
  label = 'Download App',
  arrowIcon = '/arrow-1.svg',
  playStore,
  appStore,
}: DownloadAppButtonProps) {
  return (
    <div className="flex w-full items-center justify-center w-[300px] mb-[32px] md:w-[322px]">
      <div className="flex items-center bg-[#FFFFFF] justify-center gap-4 rounded-full border border-[#E6E6E6] bg-white px-[17px] py-[10px] md:px-[25] md:py-[15px]">
        <div className="flex items-center gap-1 justify-center">
          <Link
            href="/"
            className="text-[14px] font-extrabold w-[126px] w-[96px] text-mainColor italic  text-center"
          >
            {label}
          </Link>
          <Image
            src={arrowIcon}
            alt="App image"
            width={20}
            height={20}
            className="h-4 w-4"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className=" rounded-full flex items-center justify-center border border-[#E6E6E6] p-2">
            <Link href="/">
              <Image
                src={playStore.icon}
                alt={playStore.alt}
                height={playStore.size ?? 20}
                quality={100}
                width={playStore.size ?? 20}
                className="object-cover w-full h-full"
              />
            </Link>
          </div>
          <div className="h-6 w-px bg-gray-300"></div>
          <div className=" rounded-full p-2 flex items-center justify-center border border-[#E6E6E6]">
            <Link href="/">
              <Image
                src={appStore.icon}
                alt={appStore.alt}
                height={appStore.size ?? 20}
                quality={100}
                width={appStore.size ?? 20}
                className="object-cover w-full h-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
