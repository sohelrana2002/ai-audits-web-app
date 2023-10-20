import Marquee from "react-fast-marquee";
import SecondHeroImage from "../../../assets/ai-audits-hero.png";
import { marqueeData } from "../../../data/Data";
import MarqueeGallery from "../../../shared/MarqueeGallery/MarqueeGallery";
// import { useAppContext } from "../../../context/AppContext";
import "./SecondHeroSection.css";

const SecondHeroSection = ({imagePath}) => {

  return (
    <section>
      <div className="container secondherosection__container">
        <div className="secondHeroSection__img">
          <img src={imagePath} alt="" />
        </div>

        <div
          className="feature__in"
          data-aos="fade-right">
          <h2>FEATURED IN</h2>

          <div className="marqueeAutoSlider">
            <Marquee>
              {marqueeData &&
                marqueeData?.map(({ id, path }) => {
                  return <MarqueeGallery key={id} path={path} />;
                  console.log("count");
                })}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondHeroSection;
