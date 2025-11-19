import Image from 'next/image';

export default function Logo() {
  return (
    <div className=" flex-1 flex items-start">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={200}
        height={200}
        className=" w-[89px] h-[50px] md:w-[146px] md:h-[77px]"
      />
    </div>
  );
}
