import { useState } from "react";

const ContactForm = () => {
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your form submission logic here
    // You can use setFormSuccess(true) or setFormError(true) based on the result of your form submission
  };

  return (
    <div className="contact-form-wrapper">
      <h3>Contact Us</h3>
      <div className="no-margin w-form">
        <form
          id="email-form"
          name="email-form"
          data-name="Email Form"
          method="get"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="input w-input"
            maxLength="256"
            name="Contact-Name"
            data-name="Contact Name"
            placeholder="Your Name"
            id="Contact-Name"
            required
          />
          <input
            type="email"
            className="input w-input"
            maxLength="256"
            name="Contact-Email"
            data-name="Contact Email"
            placeholder="Email Address"
            id="Contact-Email"
            required
          />
          <textarea
            id="Contact-Message-2"
            name="Contact-Message"
            placeholder="Message"
            maxLength="5000"
            data-name="Contact Message"
            required
            className="input text-area w-input"
          />
          <input
            type="submit"
            value="Subscribe"
            data-wait="Please wait..."
            className="button w-button"
          />
        </form>
        {formSuccess && (
          <div className="default-message contact-success w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
        )}
        {formError && (
          <div className="error-message w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
