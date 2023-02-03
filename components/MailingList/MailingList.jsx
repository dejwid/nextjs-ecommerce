import Link from "next/link";
import Image from "next/image";

const MailingList = () => {
  return (
    <div className="sidebar-block">
      <h4 className="sidebar-heading">
        Join Our Mailing List &amp; Get{" "}
        <span className="text-color">Special Discounts</span>
      </h4>
      <div className="full-width w-form">
        <form
          id="wf-form-Sidebar-Subscribe-Form"
          name="wf-form-Sidebar-Subscribe-Form"
          data-name="Sidebar Subscribe Form"
          method="get"
          className="sidebar-subscribe-form"
        >
          <div className="full-width-input-wrapper">
            <Image
              width={18}
              height={18}
              src="/images/at-sign.svg"
              alt=""
              className="input-icon"
            />
            <input
              type="email"
              className="input icon-input w-input"
              maxLength="256"
              name="Sidebar-Subscribe"
              data-name="Sidebar Subscribe"
              placeholder="Email address"
              id="Sidebar-Subscribe"
              required=""
            />
          </div>
          <input
            type="submit"
            value="Subscribe"
            data-wait="Please wait..."
            className="button w-button"
          />
          <div className="form-text-small">
            We never share your info. View our{" "}
            <Link href="/faq">
              <div className="link-dark">Privacy Policy</div>
            </Link>
          </div>
        </form>
        <div className="default-message text-left w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div className="error-message w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
  );
};

export default MailingList;
