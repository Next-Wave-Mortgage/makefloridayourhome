import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { Programs } from "@/components/sections/Programs";
import { WhyTrust } from "@/components/sections/WhyTrust";
import { ExpertGuides } from "@/components/sections/ExpertGuides";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Programs />
      <WhyTrust />
      <ExpertGuides />
      <WhatWeDo />
      <FAQ />
      <FinalCTA />
    </>
  );
}
