import React, { useState } from "react";
import { BenefitData } from "../../data/Data";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import "./Benefits.css";
import { NavLink } from "react-router-dom";

const Benefits = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 2;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = BenefitData.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(BenefitData.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const getPrevPage = () => {
    if (currentPage !== firstIndex + 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const getNextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section>
      <div className="container benefits__container">
        <div className="belefits__left">
          <h1 className="heading">Benefits of AI Audits</h1>
          <p className="text">
            With Originality.AI you can add unlimited team members & complete
            unlimited scans checking if AI Writing Tools were used, content was
            Plagiarized and if the content has the ideal Readability Score.
          </p>
          <button className="nav__btn">Get started free</button>
        </div>

        <div className="benefits__right">
          <div className="benefit__content">
            {records &&
              records?.map((curElem) => {
                return (
                  <NavLink to={curElem.path} className="benefits__card" key={curElem.id}>
                    <div className="befenit__icon">
                      <img src={curElem.img} alt="" />
                    </div>
                    <div className="benefits__card-details">
                      <h5 className="sub__heading">{curElem.title}</h5>
                      <p className="text">{curElem.des}</p>
                    </div>
                  </NavLink>
                );
              })}
          </div>

          <div className="benefits__button">
            <button type="button" className="nav__btn" onClick={getPrevPage}>
              <FaLongArrowAltLeft />
            </button>
            <p>
              {currentPage} of {nPage}
            </p>
            <button type="button" className="nav__btn" onClick={getNextPage}>
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
