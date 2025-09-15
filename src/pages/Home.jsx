// src/pages/Home.jsx
import React from "react";

import ReviewsSection from "../components/Reviews/ReviewsSection";
import LastChanceSection from "../components/last-chance/LastChanceSection";
import TimelineSection from "../components/timeline/TimelineSection";
import LockInSection from "../components/lockin/LockInSection";
import TwoPathsSection from "../components/twoPaths/TwoPathsSection";
import WinningSection from "../components/testimonials/WinningSection";
import AskYourselfSection from "../components/askYourself/AskYourselfSection";
import ExclusiveFeaturesSection from "../components/exclusive/ExclusiveFeaturesSection";
import ChoicesSection from "../components/choices/ChoicesSection";
import PriceNoticeSection from "../components/priceNotice/PriceNoticeSection";
import FAQSection from "../components/faq/FAQSection";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
// import Hero from "../components/hero/Hero";
import HeroTwo from "../components/hero2/HeroTwo";
import CampusSection from "../components/campus/CampusSection";

export default function Home() {
  return (
    <div className="relative min-h-screen  text-white overflow-hidden">
      <Navbar />
      <HeroTwo />
      <ReviewsSection />
      <LastChanceSection />
      <TimelineSection />
      <LockInSection />
      <CampusSection />
      <TwoPathsSection />
      <WinningSection />
      <AskYourselfSection />
      <ExclusiveFeaturesSection />
      <ChoicesSection />
      <PriceNoticeSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
