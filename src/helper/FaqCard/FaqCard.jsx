import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Collapse } from "react-collapse";

import "./FaqCard.css";

const FaqCard = ({ question, answer, toggle, open }) => {

  return (
    <div className="faq__card">
      <div className="faq__question" onClick={toggle}>
        <p className="sub__heading">{question}</p>
        <span>{open ? <FaMinus /> : <FaPlus />}</span>
      </div>
 
      <div className={open ? "faq__answer active" : "faq__answer"}>
        <p className="text">{answer}</p>
      </div>
    </div>
  );
};

export default FaqCard;
