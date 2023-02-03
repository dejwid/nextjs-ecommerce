import React from "react";
import Image from "next/image";
import Link from "next/link";

function PromoHome() {
  return (
    <div className="section promo-section hide wf-section">
      <div className="wrapper">
        <div className="promo center">
          <div
            data-w-id="866f2784-48ee-51dc-9b1a-83deff19c113"
            className="promo-info center"
          >
            <div className="badge">Crystal jewelry</div>
            <h2 className="promo-heading white center">
              A touch of <span className="text-color">natural magic</span> to
              accessorize your style.
            </h2>
            <Link href="/shop">
              <a
                data-w-id="80b2d673-b942-0c57-e83a-3b335665aad9"
                className="button ghost w-inline-block"
              >
                <div
                  style={{ widoth: "0px" }}
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
        </div>
      </div>
    </div>
  );
}

export default PromoHome;
