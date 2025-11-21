import Link from 'next/link';
export default function RegistrationLink() {
  return (
    <div className=" flex items-end justify-end h-[50px] w-1/2  md:justify-end md:h-20">
      <Link
        href="/register"
        className="font-lato text-mainColor px-4 underline text-sm"
      >
        Register as a Provider
      </Link>
    </div>
  );
}
