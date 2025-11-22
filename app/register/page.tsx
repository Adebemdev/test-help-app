import RegistrationForm from '@/app/_components/RegistrationForm';
import Image from 'next/image';
import registeredImage2 from '@/public/registered-2-image.svg';
export default function Page() {
  return (
    <main className="bg-[#FAF9F8] overflow-hidden flex justify-center md:p-20">
      <div className=" hidden md:block w-[610px]">
        <Image
          src={registeredImage2}
          alt="A register provider"
          width={70}
          height={70}
          quality={100}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-[610px] px-[16px] py-[24px]">
        <RegistrationForm />
      </div>
    </main>
  );
}
