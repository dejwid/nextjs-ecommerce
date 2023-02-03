import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterNew from "../components/LayoutComponents/FooterNew";
import InstagramSection from "../components/LayoutComponents/InstagramSection";
import NavStatic from "../components/Navigation/NavStatic";
import InnerHero from "../components/Hero/InnerHero";
import BioSection from "../components/BioSection/BioSection";

function About() {
  return (
    <div className="page-wrapper">
      <NavStatic />
      <InnerHero title="About Us" />
      <div className="section wf-section">
        <div className="wrapper">
          <div className="side-blocks mobile-reverse">
            <div className="side-block no-padding-left">
              <div
                data-w-id="e0de9cb8-40b3-4be5-c9b9-1536e6f2c84f"
                // style={{ opacity: 0 }}
                className="side-info"
              >
                <div className="title">About Us</div>
                <h2>Three Sisters</h2>
                <div className="divider"></div>
                <p className="text-grey">
                  Welcome to Three Sisters PNW! It has been our life long dream
                  to own a business together and basically do everything
                  together. Thank you for being here! Let us introduce
                  ourselves: Melissa the beauty, Krista the boss, and Rachelle
                  the funny one. We all live on the same street in Corvallis,
                  Oregon on a family compound. We love sisterhood and treat
                  every woman like they are our sister. We are excited to share
                  with you our love and obsession with stones and essential
                  oils. Our products are not only beautiful, but beneficial for
                  overall wellness.{" "}
                </p>
                <a
                  href="contact.html"
                  data-w-id="f02e99e7-e7cb-d48b-538e-169325b390ca"
                  className="button ghost w-inline-block"
                >
                  <div className="button-icon-wrapper h-auto">
                    <Image
                      width={500}
                      height={700}
                      src="/images/send-right-white.svg"
                      alt=""
                      className="button-icon left h-full"
                    />
                  </div>
                  <div>Drop Us a L</div>
                </a>
              </div>
            </div>
            <div className="side-block small-padding-side">
              <Image
                width={500}
                height={680}
                src="/images/three-sis.png"
                // style={{ opacity: 0 }}
                data-w-id="e0de9cb8-40b3-4be5-c9b9-1536e6f2c85d"
                alt=""
                className="portrait"
              />
            </div>
          </div>
        </div>
      </div>
      <BioSection />
      <InstagramSection />
      <FooterNew />
    </div>
  );
}

export default About;
