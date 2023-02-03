import Link from "next/link";
import Image from "next/image";

const SidebarBlock = () => (
  <div className="sidebar-block sticky">
    <Link href="/shop">
      <a className="banner w-inline-block">
        <div className="banner-header">
          <div className="title small-title">
            <span className="text-color">New</span> Arrivals
          </div>
          <h5>Explore Our Shop</h5>
        </div>
        <div className="banner-image-wrapper">
          <Image
            layout="fill"
            objectFit="contain"
            src="/images/5.png"
            alt=""
            className="full-width"
          />
          <div
            style={{
              WebkitTransform:
                "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MsTransform:
                "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: "0",
            }}
            className="button banner-button"
          >
            <div className="button-icon-wrapper w-clearfix">
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/cart.svg"
                alt=""
                className="button-icon left"
              />
            </div>
            <div>Shop Now</div>
          </div>
        </div>
      </a>
    </Link>
  </div>
);

export default SidebarBlock;
