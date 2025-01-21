"use client"

import { HomePageHeader } from "../components/ui/HomePageHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {

  return (
    <main className="overflow-x-hidden">
      <HomePageHeader/>
      <HeroSection/>
      <AboutSection/>
      <ExperienceSection/>
      <ProjectsSection/>
      <ContactSection/>
    </main>
  );
}
