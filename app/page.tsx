// page.tsx
import { SiteHeader } from "@/components/Header";
import { Hero } from "@/components/HeroSection";
import { Specialties } from "@/components/SpecialtiesSection";
import { SiteFooter } from "@/components/FooterSection";
import { CTA } from "@/components/Cta";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Specialties />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}
