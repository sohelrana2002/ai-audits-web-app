import FirstHeroSection from "../../components/HeroSection/FirstHeroSection/FirstHeroSection";
import PasteContent from "../../components/PasteContent/PasteContent";
import SecondHeroSection from "../../components/HeroSection/SecondHeroSection/SecondHeroSection";
import ThirdHeroSection from "../../components/HeroSection/ThirdHeroSection/ThirdHeroSection";
import Working from "../../components/Working/Working";
import Pricing from "../../components/Pricing/Pricing";
import Benefits from "../../components/Benefits/Benefits";
import FAQ from "../../components/FAQ/FAQ";

const DetectorPlugin = () => {
  return (
    <>
      <FirstHeroSection
        homeBg={false}
        description={firstHeroDes}
        title={firstHeroTiltle}
      />
      <PasteContent />
      <SecondHeroSection />
      <ThirdHeroSection />
      <Working />
      <Pricing />
      <Benefits />
      <FAQ />
    </>
  );
};

export default DetectorPlugin;

// ====for first hero section=========
const firstHeroTiltle = "Real-time AI Content Detection for WordPress";
const firstHeroDes =
  "From ChatGPT to GPT-4 and Bard, our plugin scans for content from all major Large Language Models. Seamlessly integrate the power of AI Audits directly into your WordPress site, ensuring every article stands out in authenticity. Install, activate, and let AI Audits elevate your content's originality, making detection a breeze. Write, edit, and publish with unmatched confidence.";
