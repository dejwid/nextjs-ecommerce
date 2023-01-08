import React from "react";

function ProductQuickView(props) {
  return (
    <div
      style={!props.show ? { display: "none" } : null}
      className="popup-wrapper"
    >
      <div
        style={{
          WebkitTransform:
            "translate3d(0, 0PX, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          MozTransform:
            "translate3d(0, 0PX, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          MsTransform:
            "translate3d(0, 0PX, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          transform:
            "translate3d(0, 0PX, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        }}
        className="popup quick-view-popup"
      >
        <div className="badge quick-view-badge">Sale</div>
        <button
          data-w-id="fdd57da4-3255-4585-520d-fe1eeda4abb5"
          className="close-button w-inline-block"
          onClick={(e) => props.openModal(e)}
        >
          <img src="images/x.svg" alt="" />
        </button>
        <img src={props.product.image} alt="" className="popup-image" />
        <div className="quick-view-info">
          {props.product.sku && (
            <div className="product-top-info">
              <div>SKU: </div>
              <div></div>
            </div>
          )}
          <h3>{props.product["Product-Name"]}</h3>
          <p className="paragraph-small text-grey">
            {props.product.description}
          </p>
          <div className="product-price">
            <div>{props.product.price}</div>
            <div className="product-old-price"></div>
          </div>
          <div>
            <form
              data-node-type="commerce-add-to-cart-form"
              className="w-commerce-commerceaddtocartform add-to-cart-wrapper"
            >
              <div className="options">
                <div className="option w-clearfix">
                  <input
                    type="number"
                    pattern="^[0-9]+$"
                    inputMode="numeric"
                    id="quantity-2be77ef9fd4325e93104e6ec451d9844"
                    name="commerce-add-to-cart-quantity-input"
                    min="1"
                    className="w-commerce-commerceaddtocartquantityinput input quantity-input"
                    value="1"
                  />
                </div>
              </div>
              <div className="buy-buttons">
                <input
                  type="submit"
                  data-node-type="commerce-add-to-cart-button"
                  data-loading-text="Adding to cart..."
                  value="Add to Cart"
                  aria-busy="false"
                  aria-haspopup="dialog"
                  className="w-commerce-commerceaddtocartbutton button add-to-cart-button"
                />
                <a
                  data-node-type="commerce-buy-now-button"
                  data-default-text="Buy now"
                  data-subscription-text="Subscribe now"
                  aria-busy="false"
                  aria-haspopup="false"
                  className="w-commerce-commercebuynowbutton button buy-now-button"
                  href="checkout.html"
                >
                  Buy now
                </a>
              </div>
            </form>
            <div
              style={{ display: "none" }}
              className="w-commerce-commerceaddtocartoutofstock out-of-stock"
            >
              <div>This product is out of stock.</div>
            </div>
            <div
              data-node-type="commerce-add-to-cart-error"
              style={{ display: "none" }}
              className="w-commerce-commerceaddtocarterror error-message"
            >
              <div
                data-node-type="commerce-add-to-cart-error"
                data-w-add-to-cart-quantity-error="Product is not available in this quantity."
                data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart."
                data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription."
                data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item."
                data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site."
                data-w-add-to-cart-select-all-options-error="Please select an option in each set."
              >
                Product is not available in this quantity.
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="quick-view-link w-inline-block">
          <div className="quick-view-link-text">View Product Page</div>
        </a>
      </div>
    </div>
  );
}

export default ProductQuickView;
