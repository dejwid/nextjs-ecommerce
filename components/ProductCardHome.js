import React, { useState, useEffect } from "react";
import ProductQuickView from "./ProductQuickView";

function ProductCardHome(props) {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [card, setCard] = useState([]);
  const [isShown, setIsShown] = useState(false);

  // useEffect(() => {
  //   console.log(isShown);
  //   if (props.openModal) {
  //     setIsShown(true);
  //   }
  // }, [props.openModal]);
  // console.log(props.openModal);

  useEffect(() => {
    setCard(props.product);
  }, [props.product]);

  function openModal(event) {
    setIsShown(!isShown);
    const productId = event.target.dataset.productId;
    setSelectedProductId(productId);
  }

  return (
    <div
      key={props.product.id}
      role="listitem"
      className="product-item w-dyn-item"
    >
      <div data-w-id={props.product.id} className="product-card">
        <div className="product-card-image-wrapper">
          <a
            data-w-id={props.product.id}
            href="#"
            className="product-card-image-link w-inline-block"
          >
            <img
              style={{ opacity: 1 }}
              src={props.product.image}
              alt=""
              className="product-card-image"
            />
          </a>
          {props.product.onSale ? (
            <div className="badge product-card-sale"></div>
          ) : null}
          <div className="quick-view-wrapper">
            <button
              data-w-id={props.product.id}
              className="quick-view-button"
              data-product-id={props.product.id}
              onClick={(e) => openModal(e)}
            ></button>
            {isShown ? (
              <ProductQuickView
                product={props.product}
                show={isShown}
                openModal={openModal}
              />
            ) : null}
          </div>
        </div>
        <div className="product-card-name">{props.product["Product-Name"]}</div>
        <div className="product-card-price">
          <div>{props.product.price}</div>
          <div className="product-card-old-price"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardHome;
