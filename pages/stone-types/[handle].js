import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import FooterNew from "../../components/LayoutComponents/FooterNew";
import Navigation from "../../components/Navigation/Navigation";
import { useRouter } from "next/router";
import stoneTypes from "../../data/stoneTypes.json";
import products from "../../data/products.json";

function SingleStoneType({ stoneType }) {
  const [state, setState] = useState({ products: [] });
  const [prodList, setProdList] = useState(products.products);
  const [categories, setCategories] = useState([]);
  const [groupedProducts, setgroupedProducts] = useState([]);

  const router = useRouter();
  const { handle } = router.query;

  useEffect(() => {
    const products = parseProductString(stoneType["Products"]);
    setState({ products });
  }, [stoneType]);

  function parseProductString(productString) {
    const products = productString.split(";");
    return products.map((product) => {
      const [name, count] = product.split("-");
      return {
        name: name.trim(),
        count: count ? parseInt(count, 10) : 1,
      };
    });
  }

  // function that finds all the products that match product.name

  let productData = prodList;
  // console.log(productData);
  for (let i = 0; i < productData.length; i++) {
    let product = productData[i];

    // check to see if the product contains words in state.products array before adding to groupedProducts
    // only add products that match the stone type

    let productName = product["Product-Name"];
    let productId = product["Product-ID"];
    let productCategory = product["Product-Categories"]
      .split(";")
      .map((c) => c.trim().toLowerCase().replace(/ /g, "-"));
    let productDescription = product["Product-Description"];
    let bestSeller = product["Best-Seller"];
    let groupExists = false;
    let isCurrentProduct = false;

    // if (productCategory.includes(handle)) {
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
        variants: [product],
        bestSeller: bestSeller,
        image: product["Main-Variant-Image"],
        price: product["Variant-Price"],
        href: product["Product-Handle"],
      });
    }
    // }
  }

  return (
    <div>
      <Navigation />
      <div
        id="Hero"
        data-w-id="facfe0df-61c4-6b95-8dad-9b934c7ce588"
        className="section page-header wf-section"
      >
        <div className="wrapper">
          <div className="header-intro">
            <div className="post-category">
              <div className="title">Stone Type</div>
            </div>
            <h1 className="post-page-heading">{stoneType["Name"]}</h1>
            <div className="divider clear"></div>
          </div>
          {/* <div className="breadcrumbs">
            <a href="#" className="link-dark">
              Home
            </a>
            <img
              src="images/right.svg"
              alt=""
              className="breadcrumbs-divider"
            />
            <a href="stone-type.html" className="link-dark">
              stone type
            </a>
            <img
              src="images/right.svg"
              alt=""
              className="breadcrumbs-divider"
            />
            <a href="#" className="link-dark"></a>
          </div> */}
        </div>
      </div>
      <div className="section wf-section">
        <div className="wrapper">
          <div className="blog">
            <div className="blog-posts-wrapper">
              <p>{stoneType["Short-Description"]}</p>
              <Image
                src={stoneType["Main-Image"]}
                loading="lazy"
                alt=""
                layout="fill"
                objectFit="cover"
                // className="image-2"
              />
            </div>
            <div className="blog-sidebar">
              <div className="sidebar-block">
                <div className="side-product-wrap">
                  <h4 className="sidebar-heading right">{stoneType["Name"]}</h4>
                  <h4 className="sidebar-heading">Products</h4>
                </div>
                {/* <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    {groupedProducts.length > 1 ? (
                      groupedProducts.map((product) => {
                        {
                          state.products.map((fuckShit, id) => {
                            console.log(
                              product["Product-Name"].includes(fuckShit.name)
                            );

                            // find out if the product name contains any of the words in state.products
                            // why the fucking shit does this not work? why is it alwasy false?

                            if (
                              // !product["Product-Name"].includes(fuckShit.name)

                              product["Product-Name"].includes(fuckShit.name) ||
                              true // this is a hack to get it to work. Its not working b
                            ) {
                              console.log(product);
                              return (
                                <div role="listitem" className="w-dyn-item">
                                  <a
                                    href={`/product/${product.href}`}
                                    className="sidebar-product w-inline-block"
                                  >
                                    <div className="sidebar-post-image">
                                      <Image
                                        src={product["Main-Variant-Image"]}
                                        loading="lazy"
                                        height={72}
                                        width={72}
                                        alt=""
                                        className="sidebar-post-image"
                                      />
                                    </div>
                                    <div className="sidebar-post-info">
                                      <div className="product-heading-sidebar">
                                        {product["Product-Name"]}
                                      </div>
                                      <div className="sidebar-product-link">
                                        View Product
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              );
                            }
                          });
                        }
                      })
                    ) : (
                      <div className="w-dyn-empty">
                        <div>No items found.</div>
                      </div>
                    )}
                  </div>
                </div> */}
              </div>
              <div className="sidebar-block">
                <h4 className="sidebar-heading">More Stone Types</h4>
                <div className="w-dyn-list">
                  <div role="list" className="sidebar-tags w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <a href="#" className="tag"></a>
                    </div>
                  </div>
                  <div className="w-dyn-empty">
                    <div>No items found.</div>
                  </div>
                </div>
              </div>
              <div className="sidebar-block">
                <h4 className="sidebar-heading">Product Categories</h4>
                <Link href="/shop">
                  <a href="shop.html" className="sidebar-category">
                    All Products
                  </a>
                </Link>
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <a href="#" className="sidebar-category"></a>
                    </div>
                  </div>
                  <div className="w-dyn-empty">
                    <div>No items found.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section no-padding-top wf-section">
        <div className="wrapper">
          <div className="intro">
            <div className="title">
              <span className="text-color">Explore</span> Other Items
            </div>
            <h2>There&#x27;s More To See</h2>
            <div className="divider no-margin-bottom"></div>
          </div>
          <div className="full-width w-dyn-list">
            <div role="list" className="products w-dyn-items">
              <div role="listitem" className="product-item small w-dyn-item">
                <div
                  data-w-id="5495ff71-6c9a-156f-add9-db0751aefdbb"
                  className="product-card"
                >
                  <div className="product-card-image-wrapper">
                    <a
                      data-w-id="5495ff71-6c9a-156f-add9-db0751aefdbd"
                      href="#"
                      className="product-card-image-link w-inline-block"
                    >
                      {/* <Image
                        style={{ opacity: 1 }}
                        src=""
                        alt=""
                        className="product-card-image"
                      /> */}
                    </a>
                    <div className="badge product-card-sale">Sale</div>
                    <div className="quick-view-wrapper">
                      <div
                        data-w-id="5495ff71-6c9a-156f-add9-db0751aefdc2"
                        className="quick-view-button"
                      ></div>
                      <div
                        style={{ display: "none", opacity: 0 }}
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
                          <a
                            data-w-id="5495ff71-6c9a-156f-add9-db0751aefdc7"
                            href="#"
                            className="close-button w-inline-block"
                          >
                            <Image
                              src="images/x.svg"
                              layout="fill"
                              objectFit="contain"
                              alt=""
                            />
                          </a>
                          {/* <Image src="" alt="" className="popup-image" /> */}
                          <div className="quick-view-info">
                            <div className="product-top-info">
                              <div>SKU: </div>
                              <div></div>
                            </div>
                            <h3></h3>
                            <p className="paragraph-small text-grey"></p>
                            <div className="product-price">
                              <div></div>
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
                          <a
                            href="#"
                            className="quick-view-link w-inline-block"
                          >
                            <div>View Product Page</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-card-name"></div>
                  <div className="product-card-price">
                    <div></div>
                    <div className="product-card-old-price"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-dyn-empty">
              <div>No items found.</div>
            </div>
          </div>
          <div className="flex-center">
            <a
              href="shop.html"
              data-w-id="5495ff71-6c9a-156f-add9-db0751aefdef"
              className="button green-shost w-inline-block"
            >
              <div>See All Products</div>
            </a>
          </div>
        </div>
      </div>
      <FooterNew />
    </div>
  );
}

export default SingleStoneType;

export async function getStaticPaths() {
  // Get all the stoneType handles
  const stoneTypeHandles = stoneTypes.map((stoneType) => stoneType["Slug"]);
  // Return the paths to all the stoneType pages
  return {
    paths: stoneTypeHandles.map((handle) => ({ params: { handle } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Find the stoneType with the matching handle
  const stoneType = stoneTypes.find((stoneType) => {
    return stoneType["Slug"] === params.handle;
  });

  // Return the stoneType data as props
  return {
    props: {
      stoneType,
    },
  };
}
