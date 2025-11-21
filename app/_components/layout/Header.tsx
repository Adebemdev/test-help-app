import Link from 'next/link';
import Logo from '@/app/_components/Logo';
import RegistrationLink from '@/app/_components/RegistrationLink';
export default function Header() {
  return (
    <header className="md:px-6 md:py-6 fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 md:border-b-2">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <RegistrationLink />
      </div>
    </header>
  );
}

// flex justify-between bg-white w-[393px] h-24 md:w-full py-8
// flex w-full h-[50px] justify-between items-center mx-auto border-b-2 border-grayColor
