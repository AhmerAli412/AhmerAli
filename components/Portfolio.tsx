"use client";

import AboutSection from "@/components/portfolio/AboutSection";
import BackgroundMesh from "@/components/ui/BackgroundMesh";
import ContactSection from "@/components/portfolio/ContactSection";
import FooterSection from "@/components/portfolio/FooterSection";
import Header from "@/components/portfolio/Header";
import HomeSection from "@/components/portfolio/HomeSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import QualificationSection from "@/components/portfolio/QualificationSection";
import ScrollUp from "@/components/portfolio/ScrollUp";
import SkillsSection from "@/components/portfolio/SkillsSection";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";
import { useScrollUp } from "@/hooks/useScrollUp";
import { useSectionScroll } from "@/hooks/useSectionScroll";

export default function Portfolio() {
  useSectionScroll();
  useHeaderScroll();
  useScrollUp();

  return (
    <>
      <BackgroundMesh />
      <Header />
      <main className="relative">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <QualificationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <FooterSection />
      <ScrollUp />
    </>
  );
}
