import React from "react";

function PopUpSubscribe(props) {
  return (
    <div
      data-w-id="47266518-c204-45f2-c5f6-15b35006bb6d"
      className="popup-wrapper subscribe-wrapper"
    >
      <div
        data-w-id="47266518-c204-45f2-c5f6-15b35006bb6e"
        className="popup subscribe-popup"
      >
        <a
          data-w-id="47266518-c204-45f2-c5f6-15b35006bb6f"
          href="#"
          className="close-button w-inline-block"
        >
          <img src="images/x.svg" alt="" />
        </a>
        <div className="subscribe-popup-image"></div>
        <div className="subscribe-popup-info">
          <h4>
            Sign Up for Our Newsletter &amp; Get{" "}
            <span className="text-color">Special Discounts </span>
          </h4>
          <p className="paragraph-small text-grey">
            Our products are not only beautiful, but beneficial for overall
            wellness.
          </p>
          <div className="w-form">
            {/* <form
              id="wf-form-Footer-Form"
              name="wf-form-Footer-Form"
              data-name="Footer Form"
              method="get"
              className="footer-subscribe-form"
              onChange={props.onChange("PopUp")}
            >
              <input
                type="email"
                className="input subscribe-popup-input w-input"
                // maxlength="256"
                style={{ maxLines: "256px" }}
                name="Footer-Subscribe-2"
                data-name="Footer Subscribe 2"
                placeholder="Email address"
                id="Footer-Subscribe-2"
                required=""
              />
              <input
                type="submit"
                value=" Sign Up"
                data-wait="Please wait..."
                className="button place-top w-button"
              />
              <div className="form-text-small">
                We never share your info. View our{" "}
                <a href="faq.html" className="link-dark">
                  Privacy Policy
                </a>
              </div>
            </form> */}
            <div className="default-message text-left w-form-done">
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

export default PopUpSubscribe;
