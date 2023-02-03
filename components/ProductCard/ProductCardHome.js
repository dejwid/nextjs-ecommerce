import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductQuickView from "./ProductQuickView";

function ProductCardHome(props) {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [card, setCard] = useState([]);
  const [isShown, setIsShown] = useState(false);

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
      style={
        props.setWidth && props.setWidth
          ? { width: props.setWidth }
          : { width: "33%" }
      }
    >
      <div data-w-id={props.product.id} className="product-card">
        <div className="product-card-image-wrapper">
          <Link href="/products/[href]" as={`/products/${props.product.href}`}>
            <a
              data-w-id={props.product.id}
              href="#"
              className="product-card-image-link w-inline-block"
            >
              <img
                width={300}
                height={300}
                src={props?.product?.image}
                alt=""
                className="product-card-image"
              />
            </a>
          </Link>
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
