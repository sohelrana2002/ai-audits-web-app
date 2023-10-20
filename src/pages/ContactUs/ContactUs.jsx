import { NavLink } from "react-router-dom";
import { contactData } from "../../data/Data";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact__bg">
      <div className="container">
        <div className="contact__container">
          <div className="contact__left">
            <h1 className="sub__heading">Write Us</h1>
            <p className="text">
              Contact us by filling the form below, or simply write us directly
              at support@aiaudits. We’ll get back to you promptly.
            </p>
            <form action="#">
              <div className="input">
                <label htmlFor="">
                  <p className="text">Name *</p>
                  <input type="text" placeholder="John Doe" />
                </label>
                <label htmlFor="">
                  <p className="text">Email *</p>
                  <input type="email" placeholder="johndoe@example.com" />
                </label>
              </div>

              <label htmlFor="">
                <p className="text">Comment or Messag *</p>
                <textarea placeholder="Write your message here..." rows={7} />
              </label>
              <button type="button" className="nav__btn">
                Submit
              </button>
            </form>
          </div>

          <div className="contact__right">
            <h1 className="sub__heading">Support</h1>
            <p className="text">
              Need help using the platform? Search our knowledge base here, or
              use the chat box below.
            </p>
            <h6 className="sub__heading">AI Audits</h6>
            <div>
              <p className="text">215, Mont-Royal Ouest, Suite 201</p>
              <p className="text">Montreal, QC Canada H2T 2T2</p>
            </div>
          </div>
        </div>

        <h6 className="heading">Contact Us</h6>

        <div className="contact__card">
          {contactData &&
            contactData?.map((curElem) => {
              const { id, icon, title, desData } = curElem;
              return (
                <div className="card" key={id}>
                  <div className="card__icon">{icon}</div>
                  <NavLink to="#">{title}</NavLink>
                  {desData &&
                    desData?.map(({ id, des, des2 }) => {
                      return (
                        <div className="des__card" key={id}>
                          <p className="text">{des}</p>
                          <p className="text">{des2}</p>
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
