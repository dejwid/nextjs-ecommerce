import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import FooterNew from "../components/LayoutComponents/FooterNew";
import InstagramSection from "../components/LayoutComponents/InstagramSection";
import Navigation from "../components/Navigation/Navigation";
import products from "../data/products.json";
import ProductCardHome from "../components/ProductCard/ProductCardHome";

function shop() {
  const [prodList, setProdList] = useState(products.products);
  const [categories, setCategories] = useState([]);
  const [groupedProducts, setgroupedProducts] = useState([]);

  const router = useRouter();
  const { handle } = router.query;

  let productData = prodList;

  for (let i = 0; i < productData.length; i++) {
    let product = productData[i];
    let productName = product["Product-Name"];
    let productId = product["Product-ID"];
    let productDescription = product["Product-Description"];
    let featuredItem = product["Featured-Item"];
    let bestSeller = product["Best-Seller"];
    let groupExists = false;

    for (let j = 0; j < groupedProducts.length; j++) {
      if (groupedProducts[j]["Product-Name"] === productName) {
        groupedProducts[j].variants.push(product);
        groupExists = true;
        break;
      }
    }

    if (!groupExists) {
      let newCategories = product["Product-Categories"]
        .split(";")
        .map((category) => ({
          id: `${category
            .trim()
            .toLowerCase()
            .replace(/ /g, "-")}-${Date.now()}`,
          name: category.trim(),
          href: `/category/${category.trim().toLowerCase().replace(/ /g, "-")}`,
          image: `category-${category
            .trim()
            .toLowerCase()
            .replace(/ /g, "-")}.png`,
        }));
      setCategories((prevCategories) => [
        ...prevCategories,
        ...newCategories.filter(
          (category) =>
            !prevCategories ||
            !prevCategories.find((c) => c.name === category.name)
        ),
      ]);

      groupedProducts.push({
        id: productId,
        "Product-Name": productName,
        categories: product["Product-Categories"]
          .split(";")
          .map((category) => category.trim()),
        description: productDescription,
        featuredItem: featuredItem,
        variants: [product],
        bestSeller: bestSeller,
        image: product["Main-Variant-Image"],
        price: product["Variant-Price"],
        href: product["Product-Handle"],
      });
    }
  }
  return (
    <div className="page-wrapper">
      <Navigation />
      <div
        id="Hero"
        data-w-id="b30bc5a5-d09c-9b28-a7ad-9ca6aca82bbd"
        className="section page-header wf-section"
      >
        <div className="wrapper page-header-wrapper">
          <div className="header-intro">
            <div className="title">
              <span className="text-color">Best</span> Products
            </div>
            <h1 className="page-heading">Our Catalog</h1>
            <div className="divider color"></div>
          </div>
          <div className="breadcrumbs">
            <a href="index.html" className="link-dark">
              Home
            </a>
            <img
              src="images/right.svg"
              alt=""
              className="breadcrumbs-divider"
            />
            <div>Shop</div>
          </div>
        </div>
      </div>
      <div className="section wf-section">
        <div className="wrapper">
          <div className="shop">
            <div className="shop-sidebar">
              <div className="sidebar-block">
                <h4 className="sidebar-block-heading">Categories</h4>
                <div className="sidebar-links">
                  <Link href="shop">
                    <a aria-current="page" className="sidebar-link w--current">
                      All Products
                    </a>
                  </Link>
                  <div className="w-dyn-list">
                    <div role="list" className="sidebar-links w-dyn-items">
                      {categories.length > 1 ? (
                        categories.map((category, id) => {
                          return (
                            <div
                              key={id}
                              role="listitem"
                              className="w-dyn-item"
                            >
                              <a href={category.href} className="sidebar-link">
                                {category.name}
                              </a>
                            </div>
                          );
                        })
                      ) : (
                        <div className="w-dyn-empty">
                          <div>No items found.</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-block featured-block">
                <h4 className="sidebar-block-heading">Featured</h4>
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    {groupedProducts.length > 1 ? (
                      groupedProducts.map((product, id) => {
                        if (product.featuredItem === true) {
                          return (
                            <div
                              key={id}
                              role="listitem"
                              className="w-dyn-item"
                            >
                              <a
                                href={product.href}
                                className="sidebar-product w-inline-block"
                              >
                                <img
                                  src={product.image}
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
            </div>
            <div className="shop-products w-dyn-list">
              <div
                role="list"
                className="products no-margin-bottom w-dyn-items"
              >
                {groupedProducts.length > 1 ? (
                  groupedProducts.map((product, id) => {
                    return (
                      <ProductCardHome
                        setWidth={"33%"}
                        product={product}
                        productIndex={id}
                        key={id}
                      />
                      //   <div
                      //     role="listitem"
                      //     className="product-item _33-percent w-dyn-item"
                      //   >
                      //     <div
                      //       data-w-id="1786abd5-7ac2-9843-2c0b-571d24ec77ce"
                      //       className="product-card"
                      //     >
                      //       <div className="product-card-image-wrapper">
                      //         <a
                      //           data-w-id="1786abd5-7ac2-9843-2c0b-571d24ec77d0"
                      //           href="#"
                      //           className="product-card-image-link w-inline-block"
                      //         >
                      //           <img
                      //             style={{ opacity: 1 }}
                      //             src=""
                      //             alt=""
                      //             className="product-card-image"
                      //           />
                      //         </a>
                      //         <div className="badge product-card-sale">Sale</div>
                      //         <div className="quick-view-wrapper">
                      //           <div
                      //             data-w-id="1786abd5-7ac2-9843-2c0b-571d24ec77d5"
                      //             className="quick-view-button"
                      //           ></div>
                      //           <div
                      //             //   style="display:none;opacity:0"
                      //             style={{ opacity: 0, display: "none" }}
                      //             className="popup-wrapper"
                      //           >
                      //             <div
                      //               style={{
                      //                 WebkittTransform:
                      //                   "translate3d(0, 0PX, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      //                 MozTransform:
                      //                   "translate3d(0, 0PX, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      //                 MsTransform:
                      //                   "translate3d(0, 0PX, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      //                 Transform:
                      //                   "translate3d(0, 0PX, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      //               }}
                      //               className="popup quick-view-popup"
                      //             >
                      //               <div className="badge quick-view-badge">
                      //                 Sale
                      //               </div>
                      //               <a
                      //                 data-w-id="1786abd5-7ac2-9843-2c0b-571d24ec77da"
                      //                 href="#"
                      //                 className="close-button w-inline-block"
                      //               >
                      //                 <img src="images/x.svg" alt="" />
                      //               </a>
                      //               <img src="" alt="" className="popup-image" />
                      //               <div className="quick-view-info" />
                      //               <div className="product-top-info">
                      //                 <div>SKU: </div>
                      //                 <div></div>
                      //               </div>
                      //               <h3></h3>
                      //               <p className="paragraph-small text-grey"></p>
                      //               <div className="product-price">
                      //                 <div></div>
                      //                 <div className="product-old-price"></div>
                      //               </div>
                      //               <div>
                      //                 {/* <form
                      //             data-node-type="commerce-add-to-cart-form"
                      //             className="w-commerce-commerceaddtocartform add-to-cart-wrapper"
                      //           >
                      //             <div className="options">
                      //               <div className="option w-clearfix">
                      //                 <input
                      //                   type="number"
                      //                   pattern="^[0-9]+$"
                      //                   inputMode="numeric"
                      //                   id="quantity-2be77ef9fd4325e93104e6ec451d9844"
                      //                   name="commerce-add-to-cart-quantity-input"
                      //                   min="1"
                      //                   className="w-commerce-commerceaddtocartquantityinput input quantity-input"
                      //                   value="1"
                      //                 />
                      //               </div>
                      //             </div>
                      //             <div className="buy-buttons">
                      //               <input
                      //                 type="submit"
                      //                 data-node-type="commerce-add-to-cart-button"
                      //                 data-loading-text="Adding to cart..."
                      //                 value="Add to Cart"
                      //                 aria-busy="false"
                      //                 aria-haspopup="dialog"
                      //                 className="w-commerce-commerceaddtocartbutton button add-to-cart-button"
                      //               />
                      //               <a
                      //                 data-node-type="commerce-buy-now-button"
                      //                 data-default-text="Buy now"
                      //                 data-subscription-text="Subscribe now"
                      //                 aria-busy="false"
                      //                 aria-haspopup="false"
                      //                 className="w-commerce-commercebuynowbutton button buy-now-button"
                      //                 href="checkout.html"
                      //               >
                      //                 Buy now
                      //               </a>
                      //             </div>
                      //           </form> */}
                      //                 <div
                      //                   // style="display:none"
                      //                   className="w-commerce-commerceaddtocartoutofstock out-of-stock"
                      //                 >
                      //                   <div>This product is out of stock.</div>
                      //                 </div>
                      //                 <div
                      //                   data-node-type="commerce-add-to-cart-error"
                      //                   // style="display:none"
                      //                   className="w-commerce-commerceaddtocarterror error-message"
                      //                 >
                      //                   <div
                      //                     data-node-type="commerce-add-to-cart-error"
                      //                     data-w-add-to-cart-quantity-error="Product is not available in this quantity."
                      //                     data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart."
                      //                     data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription."
                      //                     data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item."
                      //                     data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site."
                      //                     data-w-add-to-cart-select-all-options-error="Please select an option in each set."
                      //                   >
                      //                     Product is not available in this
                      //                     quantity.
                      //                   </div>
                      //                 </div>
                      //               </div>
                      //             </div>
                      //             <a
                      //               href="#"
                      //               className="quick-view-link w-inline-block"
                      //             >
                      //               <div>View Product Page</div>
                      //             </a>
                      //           </div>
                      //         </div>
                      //       </div>
                      //     </div>
                      //     <div className="product-card-name"></div>
                      //     <div className="product-card-price">
                      //       <div></div>
                      //       <div className="product-card-old-price"></div>
                      //     </div>
                      //   </div>
                    );
                  })
                ) : (
                  <div className="w-dyn-empty">
                    <div>No items found.</div>
                  </div>
                )}
              </div>
            </div>

            {/* <div
              role="navigation"
              aria-label="List"
              className="w-pagination-wrapper pagination"
            >
              <div className="pagination-left">
                <a
                  data-w-id="e45ec1bf-3c38-2c7a-6bbd-bf642615d2aa"
                  href="#"
                  aria-label="Previous Page"
                  className="w-pagination-previous button ghost green"
                >
                  <div
                    data-w-id="5c051886-7f5e-f0bf-cd01-40401e34ec9d"
                    className="button-icon-wrapper"
                  >
                    <img
                      src="images/arrow-left-white.svg"
                      alt=""
                      className="button-icon left"
                    />
                  </div>
                  <div className="w-inline-block">Prev</div>
                </a>
              </div>
              <div
                aria-label="Page 1 of 1"
                role="heading"
                className="w-page-count page-count"
              ></div>
              <div className="pagination-right">
                <a
                  data-w-id="e45ec1bf-3c38-2c7a-6bbd-bf642615d2ae"
                  href="#"
                  aria-label="Next Page"
                  className="w-pagination-next button ghost green"
                >
                  <div className="w-inline-block">Next</div>
                  <div
                    style={{ width: "0px" }}
                    className="button-icon-wrapper w-clearfix"
                  >
                    <img
                      src="images/arrow-right-white.svg"
                      alt=""
                      className="button-icon right"
                    />
                  </div>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <InstagramSection />
      <FooterNew />
    </div>
  );
}

export default shop;
