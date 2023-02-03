import React from "react";
import Image from "next/image";
import Link from "next/link";

function SlideThree(props) {
  return (
    <div data-w-id="755842d1-0059-68b2-7832-70b6995dea27" className="w-slide">
      <div className="hero-slide _3">
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
              <div className="title hide">
                <span className="text-color">Hand Made</span> Essential Oils
              </div>
              <h1 className="hero-heading">Essential Oils</h1>
              <Link href="/shop">
                <a
                  data-w-id="755842d1-0059-68b2-7832-70b6995dea32"
                  className="button ghost w-inline-block"
                >
                  <div
                    style={{ width: "0px" }}
                    className="button-icon-wrapper w-clearfix"
                  >
                    <Image
                      layout="fill"
                      objectFit="contain"
                      src="images/cart-white.svg"
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

export default SlideThree;
