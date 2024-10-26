import "core-js/stable";
import "regenerator-runtime/runtime";

import HeroSection from "./HeroSection";
import SynopsisSection from "./SynopsisSection";
import AtAGlanceSection from "./AtAGlanceSection";
import ReadExcerptSection from "./ReadExcerptSection";
import ReviewCarousel from "./ReviewCarousel";
import ReadersAreaSection from "./ReadersAreaSection";

import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />;
      <SynopsisSection />
      <AtAGlanceSection />
      <ReadExcerptSection />
      <ReviewCarousel />
      <ReadersAreaSection />
      <Footer />
    </div>
  );
}
