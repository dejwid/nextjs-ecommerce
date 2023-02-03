import React from "react";
import Link from "next/link";
import Image from "next/Image";
import NavStatic from "../components/Navigation/NavStatic";
import InstagramSection from "../components/LayoutComponents/InstagramSection";
import FooterNew from "../components/LayoutComponents/FooterNew";
import ContactForm from "../components/Forms/ContactForm";
import HeaderIntro from "../components/HeaderIntro/HeaderIntro";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

function contact() {
  return (
    <div className="page-wrapper">
      <NavStatic />
      <div
        id="Hero"
        data-w-id="b30bc5a5-d09c-9b28-a7ad-9ca6aca82bbd"
        className="section page-header wf-section"
      >
        <div className="wrapper page-header-wrapper">
          <HeaderIntro
            title={"Let's Get In Touch"}
            subTitleMain={`Contact`}
            subTitleHighlight={"Us"}
          />
          <Breadcrumbs page="contact" url="/contact" />
        </div>
      </div>
      <div className="section no-padding-bottom wf-section">
        <div className="wrapper">
          <div className="contact">
            <ContactForm />
            <div className="contact-info">
              <h4>Address</h4>
              <div className="contact-address">Corvallis, Oregon</div>
              <div className="contacts">
                <div>
                  <strong>Email us:</strong>  
                  <Link href="/" className="link-grey">
                    threesisterspnw@gmail.com
                  </Link>
                  <br />
                  <strong>Call us:</strong>  
                  <span className="text-grey">(541) 800-1913</span>
                </div>
              </div>
              <h4>Follow</h4>
              <div className="social-links">
                <Link
                  href="https://www.facebook.com/threesisterspnw/"
                  target="_blank"
                >
                  <div className="social-button w-inline-block">
                    <Image
                      width={18}
                      height={18}
                      src="/images/facebook-color.svg"
                      alt=""
                      className="full-width"
                    />
                  </div>
                </Link>
                <Link
                  href="https://www.instagram.com/3sistersboutiquepnw/"
                  target="_blank"
                >
                  <div className="social-button w-inline-block">
                    <Image
                      width={18}
                      height={18}
                      src="/images/instagram-color.svg"
                      alt=""
                      className="full-width"
                    />
                  </div>
                </Link>
                <Link href="https://pinterest.com" target="_blank">
                  <div className="social-button w-inline-block">
                    <Image
                      width={18}
                      height={18}
                      src="/images/pinterest-color.svg"
                      alt=""
                      className="full-width"
                    />
                  </div>
                </Link>
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
