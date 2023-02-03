import React from "react";
import Image from "next/image";
import Link from "next/link";

function SlideOne(props) {
  return (
    <div data-w-id="79d4d70d-5049-009b-9ab3-224fd6a2af3e" className="w-slide">
      <div className="hero-slide _1">
        <div className="wrapper full-height no-margin">
          <div className="slider-columns">
            <div
              style={{
                WebkitTransform:
                  "translate3d(80PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(80PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MsTransform:
                  "translate3d(80PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(80PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                // opacity: "0",
              }}
              className="slide-info"
            >
              <h3 className="title text-color">ThreeSistersPNW</h3>
              <h1 className="hero-heading">The Best Way to Wear Your Energy</h1>
              <p>
                Three Sisters PNW is a small business based in the Pacific
                Northwest. We are three sisters that share an obsession with
                stones and essential oils. Our products are not only beautiful
                but beneficial for overall wellness.
              </p>
              <Link href="/shop">
                <a
                  data-w-id="4ce83920-f517-5cce-646e-b776435b1d83"
                  className="button ghost w-inline-block"
                >
                  <div
                    style={{ width: "0px" }}
                    className="button-icon-wrapper w-clearfix"
                  >
                    <Image
                      layout="fill"
                      objectFit="contain"
                      src="/images/cart-white.svg"
                      alt=""
                      className="button-icon left"
                    />
                  </div>
                  <div>Shop Now</div>
                </a>
              </Link>
            </div>
            <div className="slide-media"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideOne;
