import FirstHeroSection from "../../components/HeroSection/FirstHeroSection/FirstHeroSection";
import SecondHeroSection from "../../components/HeroSection/SecondHeroSection/SecondHeroSection";
import ThirdHeroSection from "../../components/HeroSection/ThirdHeroSection/ThirdHeroSection";
import Working from "../../components/Working/Working";
import Pricing from "../../components/Pricing/Pricing";
import plagiarismCheckingHero from "../../assets/aiAuditsChecking.png";
import { AiPlagiarismData } from "../../data/Data";
import { workingPlagiarismData } from "../../data/Data";
import FAQ from "../../components/FAQ/FAQ";
import { faqPlagiarismData } from "../../data/Data";
import PasteContent from "../../components/PasteContent/PasteContent";

const PlagiarismChecking = () => {
  return (
    <>
      <FirstHeroSection
        description={description}
        homeBg={false}
        title="Advanced plagiarism checker"
      />
      <PasteContent />
      <SecondHeroSection imagePath={plagiarismCheckingHero} />
      <ThirdHeroSection
        thirdHeroHeading={thirdHeroTitle}
        title={thirdHeroDes}
        data={AiPlagiarismData}
      />
      <Working
        workingTitle={wokingPlagirismHeading}
        data={workingPlagiarismData}
      />
      <Pricing />
      <FAQ data={faqPlagiarismData} />
    </>
  );
};

export default PlagiarismChecking;

// ======for first hero section========
const description =
  "Detect Plagiarism and AI generated content with our complete solution trusted by millions of users.";

// ======fot third hero section========
const thirdHeroTitle =
  "Advanced Plagiarism Checker Powered By Artificial Intelligence";
const thirdHeroDes =
  "Discover the future of content integrity with our cutting-edge Plagiarism Checker and AI Detection Tool. Designed for writers, educators, and web publishers";

// =========for working section==========
const wokingPlagirismHeading = "Avoid plagiarism and AI generated content";
