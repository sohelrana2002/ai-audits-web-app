import FirstHeroSection from "../../components/HeroSection/FirstHeroSection/FirstHeroSection";
import PasteContent from "../../components/PasteContent/PasteContent";
import SecondHeroSection from "../../components/HeroSection/SecondHeroSection/SecondHeroSection";
import ThirdHeroSection from "../../components/HeroSection/ThirdHeroSection/ThirdHeroSection";
import Working from "../../components/Working/Working";
import Pricing from "../../components/Pricing/Pricing";
import Benefits from "../../components/Benefits/Benefits";
import FAQ from "../../components/FAQ/FAQ";
import { faqData } from "../../data/Data";
import { AiDetectionData } from "../../data/Data";
import { workingHomeData } from "../../data/Data";

const Home = () => {
  return (
    <>
      <FirstHeroSection description={description} homeBg={true} />
      <PasteContent />
      <SecondHeroSection imagePath={aiAuditsHero} />
      <ThirdHeroSection
        thirdHeroHeading={thirdHeroHeading}
        title={thirdHeroTitle}
        data={AiDetectionData}
      />
      <Working
        workingTitle={wokingHomeTitle}
        workingDes={wokingHeroDes}
        data={workingHomeData}
      />
      <Pricing />
      <Benefits />
      <FAQ data={faqData} />
    </>
  );
};

export default Home;

// ======for first hero section==============
const description =
  "AI Audits isn't just another tool; it's the definitive authority in AI content detection. With unparalleled precision and a commitment to content originality, our platform stands unmatched in the accuracy of detections. We delve deep, identifying content crafted by the industry's most advanced Large Language Models, including giants like ChatGPT, GPT-4, and Bard. Harnessing a deep understanding of the digital landscape, AI Audits ensures that every piece of content is genuine and free from AI-generated imitations. When it comes to ensuring authenticity and setting the benchmark, AI Audits is the undisputed leader.";

import aiAuditsHero from "../../assets/ai-audits-hero.png";

// =======for third hero section=========
const thirdHeroHeading = "The Gold Standard in AI Detection at 99.9% Accuracy";
const thirdHeroTitle =
  "Boasting a staggering 99.6% accuracy rate, AI Audits stands as a beacon of reliability in a rapidly evolving AI landscape. As the digital frontier expands and Large Language Models advance, we evolve in tandem, ensuring our detection algorithms are always a step ahead.";

// ========for woking section==========
const wokingHomeTitle = "How AI Audits Content Detection Work";
const wokingHeroDes =
  "Our AI content detector is built to help you get a clear and accurate assessment.";
