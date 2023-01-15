import React from "react";
import "./styles.css";
const Footer = () => {
  return (
    <div className="Footer-section">
      <div className="up-foot">
        <div className="">
          <div className="foot-title">incentiv.</div>
          <div className="foot-para">
            Incentiv’s ESOP management platform offers an easy way for
            “employers” to issue ESOPs/grants to their employees, and allow
            employees to easily accept, track, exercise, and sell their granted
            shares.
          </div>
        </div>
        <div className="contact-contain">
          <div className="contact-title">Contact</div>
          <div className="contact-detail">
            <div className="mail-txt">support@incentiv.in</div>
            <div className="add-text">
              Beginest Harbor 4, Indiranagar, Bangalore, Karnataka 560038
            </div>
          </div>
        </div>
        <div className="fine-text">
          <div className="privacy-title">Fine Print</div>
          <div className="privacy-detail">
            <div className="privacy-text">Privacy Policy</div>
            <div classname="term-text">Terms and condition</div>
          </div>
        </div>
      </div>

      <div className="down-foot">
        <div className="head-disclamer">Legal Disclaimer </div>
        <ul className="para-disclamer">
          <li>
            All trademarks and logos or registered trademarks and logos found on
            this Site or mentioned herein belong to their respective owners and
            are solely being used for informational purposes.
          </li>
          <li>
            Information provided herein has been gathered from public sources.
            Fincentiv Solutions Pvt. Ltd. disclaims any and all responsibility
            in connection with veracity of this data. Information presented on
            this website is for educational purposes only and should not be
            treated as legal, financial, or any other form of advice. Fincentiv
            Solutions Pvt. Ltd. is not liable for financial or any other form of
            loss incurred by the user or any affiliated party on the basis of
            information provided herein.
          </li>
          <li>
            Fincentiv Solutions Pvt. Ltd. is neither a stock exchange nor does
            it intend to get recognized as a stock exchange under the Securities
            Contracts Regulation Act, 1956. Fincentiv Solutions Pvt. Ltd. is not
            authorised by the capital markets regulator to solicit investments.
            The securities traded on these platforms are not traded on any
            regulated exchange. Fincentiv Solutions Pvt. Ltd. also provides that
            it does not facilitate any online or offline buying, selling, or
            trading of securities.
          </li>
          <li>
            Investing in private companies may be considered highly speculative
            and involves a high degree of risk, including the risk of
            substantial loss of investment. Investors must be able to afford the
            loss of their entire investment.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
