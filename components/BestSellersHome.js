import React from "react";
import Link from "next/link";
import ProductCardHome from "./ProductCard/ProductCardHome";

function BestSellersHome(props) {
  return (
    <div className="section no-padding-top wf-section">
      <div className="wrapper">
        <div className="intro">
          <div className="title">
            <span className="text-color">Explore</span> the Shop
          </div>
          <h2>Our Bestsellers</h2>
          <div className="divider no-margin-bottom"></div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="products w-dyn-items">
            {props.data ? (
              props.data.map((product, id) => {
                if (product.bestSeller) {
                  return (
                    <ProductCardHome
                      product={product}
                      productIndex={id}
                      key={id}
                    />
                  );
                }
              })
            ) : (
              <div className="w-dyn-empty">
                <div>No items found.</div>
              </div>
            )}
          </div>
        </div>
        <div className="flex-center">
          <Link href="/shop">
            <a
              data-w-id="b2ff4c67-07c8-1b5f-6577-e568e9a4fd49"
              className="button green-shost w-inline-block"
            >
              <div>All Products</div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BestSellersHome;
