import React from "react";
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
                      {
                        video === true ? <video src={imgPath} autoPlay muted loop /> : <img src={imgPath} alt="" />
                      }
                      
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
{/* 
          <div className="working__card">
            <div className="working__card-content" data-aos="fade-right">
              <h5 className="sub__heading">
                2. Enter the text you want to check for AI.
              </h5>

              <div>
                <p className="text">
                  <span>
                    <MdOutlineKeyboardDoubleArrowRight />
                  </span>
                  <span>
                    Paste text using our quick scan or upload documents in the
                    following formats: .docx, .png and .jpg.
                  </span>
                </p>

                <p className="text">
                  <span>
                    <MdOutlineKeyboardDoubleArrowRight />
                  </span>
                  <span>
                    Our OCR (Optical Character Recognition) technology
                    effortlessly extracts text from scanned documents or
                    pictures, even those written in handwriting.
                  </span>
                </p>
              </div>
              <button className="nav__btn">Get started free</button>
            </div>

            <div className="video" data-aos="fade-left">
              <img src={WorkingImage1} alt="" />
            </div>
          </div> */}


        </div>
      </div>
    </section>
  );
};

export default Working;
