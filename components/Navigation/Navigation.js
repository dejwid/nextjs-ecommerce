import React from "react";
import Link from "next/link";

function Navigation(props) {
  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      data-w-id="3e665832-e661-9678-7e97-efacb32f4091"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="nav-bar w-nav"
    >
      <Link href="/" aria-current="page">
        <a className="nav-brand w-nav-brand w--current">
          <img
            src="images/Untitled-design-27.png"
            loading="lazy"
            width="138"
            // sizes="(max-width: 767px) 137.98611450195312px, (max-width: 991px) 18vw, (max-width: 1919px) 7vw, 137.98611450195312px"
            // srcset="images/Untitled-design-27-p-500.png 500w, images/Untitled-design-27.png 770w"
            alt=""
            className="text-logo"
          />
        </a>
      </Link>
      <nav role="navigation" className="nav-menu w-nav-menu">
        <Link href="/" aria-current="page">
          <a className="nav-link grey w-nav-link w--current">Home</a>
        </Link>
        <div
          data-hover="true"
          data-delay="400"
          data-w-id="85f5f272-d149-bcda-e280-0f2b54233bd0"
          className="w-dropdown"
        >
          <div className="nav-link nav-dropdown grey w-dropdown-toggle">
            <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
            <Link href="/shop">
              <div>Shop</div>
            </Link>
          </div>
          <nav className="dropdown-list w-dropdown-list">
            <Link href="/shop">
              <a className="dropdown-link w-dropdown-link">All Items</a>
            </Link>
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <a href="#" className="dropdown-link w-dropdown-link"></a>
                </div>
              </div>
              <div className="w-dyn-empty">
                <div>No items found.</div>
              </div>
            </div>
          </nav>
        </div>
        <div
          data-hover="true"
          data-delay="400"
          data-w-id="d766a0bb-f1ba-03cc-46fb-4ed6434ca3ed"
          className="w-dropdown"
        >
          <div className="nav-link nav-dropdown grey w-dropdown-toggle">
            <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
            <Link href="/stone-type">
              <div>Stones</div>
            </Link>
          </div>
          <nav className="dropdown-list w-dropdown-list">
            <Link href="/stone-type">
              <a className="dropdown-link w-dropdown-link">All Stones</a>
            </Link>
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <a href="#" className="dropdown-link w-dropdown-link"></a>
                </div>
              </div>
              <div className="w-dyn-empty">
                <div>No items found.</div>
              </div>
            </div>
          </nav>
        </div>
        <Link href="/blog" className="nav-link grey w-nav-link">
          <a className="nav-link grey w-nav-link">Blog</a>
        </Link>
        <Link href="/about" className="nav-link grey w-nav-link">
          <a className="nav-link grey w-nav-link">About</a>
        </Link>
        <Link href="/contact">
          <a href="contact.html" className="nav-link grey w-nav-link">
            Contact
          </a>
        </Link>
        <div className="nav-menu-small">
          <a
            href="#"
            data-w-id="d293350f-a4f0-8619-e533-207a829b959e"
            className="nav-link-small subscribe-link grey w-nav-link"
          >
            Subscribe
          </a>
          <a href="faq.html" className="nav-link-small grey w-nav-link">
            FAQ
          </a>
        </div>
      </nav>
      <div className="nav-info">
        {/* <form
          action="/search"
          className="search-form w-form"
          onChange={props.onChange(() => "Nav1")}
        >
          <div className="search-input-wrapper">
            <img src="images/search.svg" alt="" className="input-icon-small" />
            <input
              type="search"
              className="search-form-input w-input"
              maxLength="256"
              name="query"
              placeholder="Search"
              id="search"
              required=""
            />
          </div>
          <input type="submit" value=" " className="search-button w-button" />
        </form> */}
        <div
          data-node-type="commerce-cart-wrapper"
          data-open-product=""
          data-wf-cart-type="rightSidebar"
          data-wf-cart-query=""
          data-wf-page-link-href-prefix=""
          data-wf-cart-easing="ease"
          data-wf-cart-duration="400"
          className="w-commerce-commercecartwrapper cart"
        >
          <a
            href="#"
            data-node-type="commerce-cart-open-link"
            className="w-commerce-commercecartopenlink cart-button w-inline-block"
          >
            <div className="cart-text w-inline-block">Cart</div>
            <div className="cart-icon"></div>
            <div
              style={{ display: "none" }}
              data-count-hide-rule="always"
              className="w-commerce-commercecartopenlinkcount item-count"
            >
              0
            </div>
          </a>
          <div
            data-node-type="commerce-cart-container-wrapper"
            style={{ display: "none" }}
            className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar cart-wrapper"
          >
            <div
              data-node-type="commerce-cart-container"
              className="w-commerce-commercecartcontainer cart-container"
            >
              <div className="w-commerce-commercecartheader cart-header">
                <h4 className="w-commerce-commercecartheading">Your Cart</h4>
                <a
                  href="#"
                  data-node-type="commerce-cart-close-link"
                  className="w-commerce-commercecartcloselink cart-close-button w-inline-block"
                ></a>
              </div>
              <div className="w-commerce-commercecartformwrapper">
                <div className="w-commerce-commercecartemptystate cart-empty">
                  <div className="cart-empty-text">
                    There is no items in your cart yet
                  </div>
                  <Link href="/shop">
                    <a className="button w-button">Start Shopping</a>
                  </Link>
                </div>
                <div
                  style={{ display: "none" }}
                  data-node-type="commerce-cart-error"
                  className="w-commerce-commercecarterrorstate error-message no-margin-top"
                >
                  <div
                    className="w-cart-error-msg"
                    data-w-cart-quantity-error="Product is not available in this quantity."
                    data-w-cart-general-error="Something went wrong when adding this item to the cart."
                    data-w-cart-checkout-error="Checkout is disabled on this site."
                    data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue."
                    data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates."
                  >
                    Product is not available in this quantity.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-button w-nav-button">
        <div className="menu-icon-line-top"></div>
        <div className="menu-icon-line-bottom"></div>
      </div>
    </div>
  );
}

export default Navigation;
