import React from "react";
import { GiArchiveResearch } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";

import "./ThirdHeroSection.css";

const ThirdHeroSection = ({ thirdHeroHeading, title, data }) => {
  return (
    <section className="thirdHero__bg">
      <div className="container thirdHero__container">
        <div className="thirdHero__content" data-aos="fade-right">
          <h1 className="heading">{thirdHeroHeading}</h1>

          <p className="text">{title}</p>
        </div>

        <div className="thirdHero__card">
          {data &&
            data?.map((curElem) => {
              const { id, imgPath, title, description } = curElem;
              return (
                <div className="card" key={id} data-aos="fade-left">
                  <div className="card__icon">{imgPath}</div>

                  <h5 className="sub__heading">{title}</h5>
                  <p className="text">{description}</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ThirdHeroSection;
