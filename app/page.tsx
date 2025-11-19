import HeroSection from '@/app/_components/sections/HeroSection';
import BuiltForSection from '@/app/_components/sections/BuiltForSection';
import EverySection from '@/app/_components/sections/EverySection';
import FaqSection from '@/app/_components/sections/FaqSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <EverySection />
      <BuiltForSection />
      <FaqSection />
    </div>
  );
}
