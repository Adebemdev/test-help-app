import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/Cut-logo.png"
      alt="Logo"
      width={100}
      height={100}
      className=" w-[89px] h-[50px] md:w-[146px] md:h-[77px]"
    />
    // <div className="overflow-hidden flex-1 flex items-start md:w-[317px]">
    // </div>
  );
}
