import { useState } from "react";
import Switch from "../../helper/Switch/Switch";
import { PriceData } from "../../data/Data";
import { FaCheck } from "react-icons/fa";

import "./Pricing.css";

const Pricing = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <section className="pricing__bg" id="pricing">
      <div className="container pricing__container">
        <h1 className="heading">Flexible pricing for your needs</h1>

        <div className="toggle">
          <button
            type="button"
            className={`annual ${!isToggle && "bold"}`}
            onClick={() => setIsToggle((prev) => !prev)}
          >
            Annual
          </button>
          <Switch
            isToggle={isToggle}
            onToggle={() => setIsToggle((prev) => !prev)}
          />
          <button
            type="button"
            className={`monthly ${isToggle && "Mbold"}`}
            onClick={() => setIsToggle((prev) => !prev)}
          >
            Monthly
          </button>
        </div>

        <div className="pricing__card-content">
          {PriceData &&
            PriceData?.map((curElem) => {
              const { id, img, text, price, updatePrice, features } = curElem;
              return (
                <div className="pricing__card" key={id}>
                  <div className="pricing__card-icon">
                    <img src={img} alt="" />
                  </div>
                  <h5 className="sub__heading">{text}</h5>
                  <div className="price">
                    <span>$</span>
                    <span>{`${!isToggle ? price : updatePrice}`}</span>
                    <span>{price > 0 ? "/ month" : ""}</span>
                  </div>

                  <div className="price__description">
                    {features &&
                      features?.map(({ feature, available }, index) => {
                        return (
                          <div
                            className="price__description-content"
                            key={index}
                          >
                            <span>
                              <FaCheck
                                className={`feature__icon ${
                                  available && "active"
                                }`}
                              />
                            </span>
                            <p className={`text ${available && "textActive"}`}>
                              {feature}
                            </p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
        </div>

        {/* ============free trial========== */}
        <div className="free__trial">
          <div className="free__trial-left">
            <h1 className="heading">
              Ready to Verify Your Content's Authenticity?
            </h1>
            <small>
              Ensure your articles are human-made and original with AI Audits.
            </small>
            <p className="text">Sign up now and benefit from:</p>
            <div className="free__trial__left-content">
              <div>
                <p className="text">
                  DETAILED AI CONTENT ASSESSMENT IN SECONDS
                </p>
                <p className="text">ENSURE SEO-FRIENDLY & HUMAN-MADE CONTENT</p>
              </div>
              <div>
                <p className="text">
                  RECEIVE A LIST OF CITATIONS FOR VERIFICATION
                </p>
                <p className="text">
                  GUARANTEE UNIQUE & RELEVANT ORIGINAL CONTENT
                </p>
              </div>
            </div>
          </div>

          {/* =========right side========== */}
          <div className="free__trial-right">
            <form>
              <p className="sub__heading">
                Claim your 1-week free trial today!
              </p>
              <input
                type="text"
                placeholder="Write only...(English only!)"
                required
              />
              <input
                type="text"
                placeholder="Your E-Mail Address..."
                required
              />
              <div>
                <input type="checkbox" required />
                <small>I agree to receive emails until I unsubscribe</small>
              </div>
              <button className="nav__btn">SIGN UP AND START FREE TRIAL</button>
              <p className="risk">100% risk free!</p>
              <small>
                ✔ NO credit card needed ✔ Does NOT turn into a subscription
              </small>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
