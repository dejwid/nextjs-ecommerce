import React from "react";
import Link from "next/link";
import stoneTypes from "../../data/stoneTypes.json";
import Image from "next/image";

const categoryName = ["Necklaces", "Bracelets", "Essential Oils", "Misc"];

function FooterNew() {
  return (
    <div className="section haze no-padding-vertical wf-section">
      <div className="wrapper footer-wrapper">
        <div className="footer _5-col _4-col">
          <div className="col footer-col">
            <h6 className="footer-heading">Shop</h6>
            <Link href="/shop">
              <a className="footer-link">All Products</a>
            </Link>
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                {categoryName.length > 1 ? (
                  categoryName.map((category, id) => {
                    return (
                      <div key={id} role="listitem" className="w-dyn-item">
                        <Link href={`/category/${category}`}>
                          <a className="footer-link">{category}</a>
                        </Link>
                      </div>
                    );
                  })
                ) : (
                  <div className="w-dyn-empty">
                    <div>No items found.</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col footer-col">
            <h6 className="footer-heading">Explore</h6>
            <Link href="/">
              <a aria-current="page" className="footer-link w--current">
                Home
              </a>
            </Link>

            <Link href="/shop">
              <a className="footer-link">Shop</a>
            </Link>
            <Link href="/stone-type">
              <a className="footer-link">Stones</a>
            </Link>
            <Link href="/blog">
              <a className="footer-link">Blog</a>
            </Link>
            <Link href="/about">
              <a className="footer-link">About</a>
            </Link>
            <Link href="/faq">
              <a className="footer-link">FAQ</a>
            </Link>
            <Link href="/contact">
              <a className="footer-link">Contact</a>
            </Link>
          </div>
          <div className="col footer-col">
            <h6 className="footer-heading">stone types</h6>
            <div className="w-dyn-list">
              <div role="list" className="stone-grid w-dyn-items">
                {stoneTypes.length > 1 ? (
                  stoneTypes.map((stone, id) => (
                    <div key={id} role="listitem" className="w-dyn-item">
                      <Link href={stone["Slug"]}>
                        <a className="footer-link">{stone["Name"]}</a>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="w-dyn-empty">
                    <div>No items found.</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            id="w-node-e28daed4-ad7c-435f-f9be-890c779ca8f6-b58e5e5a"
            className="footer-subscribe"
          >
            <h6 className="footer-heading">Newsletter</h6>
            <div className="_100 w-form">
              {/* <form
                id="wf-form-Footer-Form"
                name="wf-form-Footer-Form"
                data-name="Footer Form"
                method="get"
                className="footer-subscribe-form"
              >
                <div className="full-width-input-wrapper">
                  <img src="images/at-sign.svg" alt="" className="input-icon" />
                  <input
                    type="email"
                    className="input footer-input w-input"
                    maxLength="256"
                    name="Footer-Subscribe"
                    data-name="Footer Subscribe"
                    placeholder="Email address"
                    id="Footer-Subscribe"
                    required=""
                  />
                </div>
                <input
                  type="submit"
                  value=" "
                  data-wait="Please wait..."
                  className="footer-subscribe-button w-button"
                />
                <div className="form-text-small"></div>
              </form> */}
              <div className="default-message text-left w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="error-message w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
            <Image
              width={770}
              height={770}
              src="/images/Untitled-design-27.png"
              loading="lazy"
              //   sizes="(max-width: 479px) 87vw, (max-width: 767px) 25vw, (max-width: 1919px) 20vw, 264.01043701171875px"
              //   srcset="images/Untitled-design-27-p-500.png 500w, images/Untitled-design-27.png 770w"
              alt=""
              className="footer-logo"
            />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div>
              Website by{" "}
              <Link
                href="https://www.joewebbdesigns.com/"
                target="_blank"
                className="link-dark"
              >
                Webb Designs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterNew;
