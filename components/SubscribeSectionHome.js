import React from "react";

function SubscribeSectionHome(props) {
  return (
    <div className="section wf-section">
      <div className="wrapper side-paddings">
        <div className="subscribe">
          <div className="title">
            Want <span className="text-color">special</span>{" "}
            <span className="text-color">offers</span> from us?
            <span className="text-color"></span>
          </div>
          <h2>Join Our Maling List</h2>
          <div className="full-width w-form">
            {/* <form
              id="wf-form-Subscribe-Form"
              name="wf-form-Subscribe-Form"
              data-name="Subscribe Form"
              method="get"
              className="subscribe-form"
              // onChange={props.onChange(() => value)}
            >
              <div className="subscribe-input-wrapper">
                <Image 
                  layout='fill'
                src="images/at-sign.svg" alt="" className="input-icon" />
                <input
                  type="email"
                  className="input subscribe-input w-input"
                  style={{ maxlength: "256" }}
                  name="Subscribe-Email-2"
                  data-name="Subscribe Email 2"
                  placeholder="Email address"
                  id="Subscribe-Email-2"
                  required=""
                />
              </div>
              <input
                type="submit"
                value="Subscribe"
                data-wait="Please wait..."
                className="button subscribe-button w-button"
              />
              <div className="form-text-small hide">
                We never share your info. View our{" "}
                <a href="faq.html" className="link-dark">
                  Privacy Policy
                </a>
              </div>
            </form> */}
            <div className="default-message w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="error-message w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeSectionHome;
