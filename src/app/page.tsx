import { AboutNewsSection } from "@/components/about";
import { Hero } from "@/components/layout/Hero";
import { FeaturedCards, ShopSection } from "@/components/shop";
import { SocialsSection } from "@/components/socials";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-black">
        <FeaturedCards />
        <AboutNewsSection />
        <ShopSection />
        <SocialsSection />
      </div>
    </>
  );
}
