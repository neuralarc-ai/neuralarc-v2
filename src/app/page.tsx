import Hero from "@/components/hero";
import Helium from "@/components/helium";
import HeliumMobile from "@/components/helium-mobile";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      {/* Desktop version - visible on lg and above (1024px+) */}
      <div className="hidden lg:block flex-1">
        <Helium />
      </div>
      {/* Mobile version - visible only on mobile and small tablets (below lg) */}
      <div className="block lg:hidden flex-1">
        <HeliumMobile />
      </div>
    </div>
  );
}
