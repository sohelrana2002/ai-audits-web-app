import React from "react";
import AiAuditsBorn from "../../helper/AiAuditsBorn/AiAuditsBorn";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import "./Working.css";

const Working = (props) => {
  const { workingTitle, workingDes, data } = props;
  return (
    <section id="how__it__work">
      <div className="container working__container">
        <div className="working__content">
          <h1 className="heading">{workingTitle}</h1>
          <p className="text">{workingDes}</p>
        </div>

        <div className="working__details">
          <div className="working__card">
            {data &&
              data?.map((curElem) => {
                const { id, imgPath, title, des, video, activate } = curElem;
                return (
                  <div key={id} className="card">
                    <div className="video" data-aos="fade-right">
                      {video === true ? (
                        <video src={imgPath} autoPlay muted loop />
                      ) : (
                        <img src={imgPath} alt="" />
                      )}
                    </div>
                    <div className="working__card-content" data-aos="fade-left">
                      <h5 className="sub__heading">{title}</h5>

                      <p className="text">
                        <span>
                          <MdOutlineKeyboardDoubleArrowRight />
                        </span>
                        <span>{des}</span>
                      </p>
                      <p className="text">{activate}</p>
                      <button className="nav__btn">Get started free</button>
                    </div>
                  </div>
                );
              })}
          </div>

          <AiAuditsBorn />
          
        </div>
      </div>
    </section>
  );
};

export default Working;
