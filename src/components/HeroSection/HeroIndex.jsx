import FirstHeroSection from "./FirstHeroSection/FirstHeroSection";
import SecondHeroSection from "./SecondHeroSection/SecondHeroSection";
import ThirdHeroSection from "./ThirdHeroSection/ThirdHeroSection";
import PasteContent from '../PasteContent/PasteContent'

const HeroIndex = () => {
  return (
    <>
      <FirstHeroSection />
      <PasteContent />
      <SecondHeroSection />
      <ThirdHeroSection />
    </>
  );
};

export default HeroIndex;
