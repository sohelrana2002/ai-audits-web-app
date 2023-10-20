import { useState } from "react";
import { faqData } from "../../data/Data";
import FaqCard from "../../helper/FaqCard/FaqCard";

import "./FAQ.css";

const FAQ = ({data}) => {
  const [singleQuestion, setSingleQuestion] = useState(false);

  const faqToggle = (index) => {
    if (singleQuestion === index) {
      setSingleQuestion(null);
      return;
    }
    setSingleQuestion(index);
  };

  return (
    <section id="FAQ">
      <div className="container faq__container">
        <h1 className="heading">Frequently asked questions</h1>

        <div className="faq__content">
          {data &&
            data?.map((curElem, index) => {
              const { id } = curElem;
              return (
                <FaqCard
                  key={id}
                  open={singleQuestion === index}
                  {...curElem}
                  toggle={() => faqToggle(index)}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
