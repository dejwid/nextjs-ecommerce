import React from "react";
import Link from "next/link";
import NavStatic from "../components/Navigation/NavStatic";
import InstagramSection from "../components/LayoutComponents/InstagramSection";
import FooterNew from "../components/LayoutComponents/FooterNew";

function contact() {
  return (
    <div className="page-wrapper">
      <NavStatic />
      <div
        id="Hero"
        data-w-id="e0977dcf-8dbd-d17d-e5c2-816cce8de4e1"
        className="section page-header wf-section"
      >
        <div className="wrapper page-header-wrapper">
          <div className="header-intro">
            <div className="title">
              <span className="text-color">Contact</span> Us
            </div>
            <h1 className="page-heading">Let’s Get in Touch</h1>
            <div className="divider color"></div>
          </div>
          <div className="breadcrumbs">
            <Link href="/">
              <a className="link-dark">Home</a>
            </Link>
            <img
              src="images/right.svg"
              alt=""
              className="breadcrumbs-divider"
            />
            <div>Contact</div>
          </div>
        </div>
      </div>
      <div className="section no-padding-bottom wf-section">
        <div className="wrapper">
          <div className="contact">
            <div className="contact-form-wrapper">
              <h3>Contact Us</h3>
              <div className="no-margin w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  className="contact-form"
                >
                  <input
                    type="text"
                    className="input w-input"
                    maxlength="256"
                    name="Contact-Name"
                    data-name="Contact Name"
                    placeholder="Your Name"
                    id="Contact-Name"
                    required=""
                  />
                  <input
                    type="email"
                    className="input w-input"
                    maxlength="256"
                    name="Contact-Email"
                    data-name="Contact Email"
                    placeholder="Email Address"
                    id="Contact-Email"
                    required=""
                  />
                  <textarea
                    id="Contact-Message-2"
                    name="Contact-Message"
                    placeholder="Message"
                    maxlength="5000"
                    data-name="Contact Message"
                    required=""
                    className="input text-area w-input"
                  ></textarea>
                  <input
                    type="submit"
                    value="Subscribe"
                    data-wait="Please wait..."
                    className="button w-button"
                  />
                </form>
                <div className="default-message contact-success w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="error-message w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-info">
              <h4>Address</h4>
              <div className="contact-address">Corvallis, Oregon</div>
              <div className="contacts">
                <div>
                  <strong>Email us:</strong>  
                  <a href="#" className="link-grey">
                    threesisterspnw@gmail.com
                    <br />
                  </a>
                  <strong>Call us:</strong>  
                  <span className="text-grey">(541) 800-1913</span>
                </div>
              </div>
              <h4>Follow</h4>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/threesisterspnw/"
                  target="_blank"
                  className="social-button w-inline-block"
                >
                  <img
                    src="images/facebook-color.svg"
                    alt=""
                    className="full-width"
                  />
                </a>
                <a
                  href="https://www.instagram.com/3sistersboutiquepnw/"
                  target="_blank"
                  className="social-button w-inline-block"
                >
                  <img
                    src="images/instagram-color.svg"
                    alt=""
                    className="full-width"
                  />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  className="social-button w-inline-block"
                >
                  <img
                    src="images/pinterest-color.svg"
                    alt=""
                    className="full-width"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InstagramSection />
      <FooterNew />
    </div>
  );
}

export default contact;
