import React from "react";
import Link from "next/link";
import Image from "next/image";

function SlideTwo(props) {
  return (
    <div data-w-id="79d4d70d-5049-009b-9ab3-224fd6a2af4e" className="w-slide">
      <div className="hero-slide _2">
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
              <h1 className="hero-heading">Necklaces</h1>
              <Link href="/shop">
                <a
                  data-w-id="91d85e29-b769-f046-af88-0db7c8035e6e"
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

export default SlideTwo;
