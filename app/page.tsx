import { ContactCta } from "@/components/sections/ContactCta";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { HomeHero } from "@/components/sections/HomeHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StudioIntro } from "@/components/sections/StudioIntro";

export default function Home() {
  return (
    <>
      <HomeHero />
      <FeaturedProjects />
      <ServicesSection />
      <StudioIntro />
      <ContactCta />
    </>
  );
}
