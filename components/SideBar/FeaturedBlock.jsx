import React from "react";
import Image from "next/image";

const FeaturedBlock = ({ groupedProducts }) => {
  return (
    <div className="sidebar-block featured-block">
      <h4 className="sidebar-block-heading">Featured</h4>
      <div className="w-dyn-list">
        <div role="list" className="w-dyn-items">
          {groupedProducts.length > 1 ? (
            groupedProducts.map((product, id) => {
              if (product.featuredItem === true) {
                return (
                  <div key={id} role="listitem" className="w-dyn-item">
                    <a
                      href={product.href}
                      className="sidebar-product w-inline-block"
                    >
                      <Image
                        layout="fill"
                        objectFit="contain"
                        // src={product.image}
                        alt=""
                        className="sidebar-product-image"
                      />
                      <div className="sidebar-product-info">
                        <div className="sidebar-product-name">
                          {product["Product-Name"]}
                        </div>
                        <div className="sidebar-product-price">
                          <div>{product.price}</div>
                          <div className="sidebar-product-old-price"></div>
                        </div>
                      </div>
                    </a>
                  </div>
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
    </div>
  );
};

export default FeaturedBlock;
