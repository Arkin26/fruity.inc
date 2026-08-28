import { Hero } from "@/components/layout/Hero";
import { NewsSection } from "@/components/news";
import { FeaturedCards, ShopSection } from "@/components/shop";
import { SocialsSection } from "@/components/socials";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-black">
        <FeaturedCards />
        <ShopSection />
        <SocialsSection />
        <NewsSection />
      </div>
    </>
  );
}
