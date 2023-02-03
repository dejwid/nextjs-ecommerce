import React, { useState } from "react";

const AddToCartForm = () => {
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the code to handle the form submission here
  };

  return (
    <form
      data-node-type="commerce-add-to-cart-form"
      className="w-commerce-commerceaddtocartform add-to-cart-wrapper"
      onSubmit={handleSubmit}
    >
      <div className="options _w-100 justify-apart">
        <div className="option w-clearfix">
          <input
            type="number"
            pattern="^[0-9]+$"
            inputMode="numeric"
            id="quantity-2be77ef9fd4325e93104e6ec451d9844"
            name="commerce-add-to-cart-quantity-input"
            min="1"
            className="w-commerce-commerceaddtocartquantityinput input quantity-input"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
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
        <button
          data-node-type="commerce-buy-now-button"
          data-default-text="Buy now"
          data-subscription-text="Subscribe now"
          aria-busy="false"
          aria-haspopup="false"
          className="w-commerce-commercebuynowbutton button buy-now-button"
          href="checkout.html"
        >
          Buy now
        </button>
      </div>
    </form>
  );
};

export default AddToCartForm;
