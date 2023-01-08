import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import products from "../../data/products.json";
import Navigation from "../../components/Navigation/Navigation";
import FooterNew from "../../components/LayoutComponents/FooterNew";
import ProductCardHome from "../../components/ProductCard/ProductCardHome";

const ProductPage = ({ product }) => {
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
        variants: [product],
        bestSeller: bestSeller,
        image: product["Main-Variant-Image"],
        price: product["Variant-Price"],
        href: product["Product-Handle"],
      });
    }
  }

  return (
    <div>
      <Navigation />
      <div
        id="Hero"
        data-w-id="21342fbe-9007-8897-ada0-1f505f176a0e"
        className="section page-header wf-section"
      >
        <div className="wrapper empty-header-wrapper">
          <div className="breadcrumbs">
            <a href="index.html" className="link-dark">
              Home
            </a>
            <img
              src="images/right.svg"
              alt=""
              className="breadcrumbs-divider"
            />
            <a href="shop.html" className="link-dark">
              Shop
            </a>
            <img
              src="images/right.svg"
              alt=""
              className="breadcrumbs-divider"
            />
            <div>{product["Product-Name"]}</div>
          </div>
        </div>
      </div>
      <div className="section wf-section">
        <div className="wrapper">
          <div className="product">
            <div
              data-duration-in="300"
              data-duration-out="100"
              data-current="Tab 1"
              data-easing="ease"
              className="product-previews w-tabs"
            >
              <div className="tabs-thumbs-menu w-tab-menu">
                <a
                  data-w-tab="Tab 1"
                  className="product-thumbs w-inline-block w-tab-link w--current"
                >
                  <div className="product-thumb-wrapper">
                    <img
                      src={product["Main-Variant-Image"]}
                      alt=""
                      className="product-thumb"
                    />
                  </div>
                </a>
                <a
                  data-w-tab="Tab 2"
                  className="product-thumbs w-inline-block w-tab-link"
                >
                  <div className="product-thumb-wrapper">
                    <img src="" alt="" className="product-thumb" />
                  </div>
                </a>
                <a
                  data-w-tab="Tab 3"
                  className="product-thumbs w-inline-block w-tab-link"
                >
                  <div className="product-thumb-wrapper">
                    <img src="" alt="" className="product-thumb" />
                  </div>
                </a>
                <a
                  data-w-tab="Tab 4"
                  className="product-thumbs w-inline-block w-tab-link"
                >
                  <div className="product-thumb-wrapper">
                    <img src="" alt="" className="product-thumb" />
                  </div>
                </a>
                <a
                  data-w-tab="Tab 5"
                  className="product-thumbs w-inline-block w-tab-link"
                >
                  <div className="product-thumb-wrapper">
                    <img src="" alt="" className="product-thumb" />
                  </div>
                </a>
                <a
                  data-w-tab="Tab 6"
                  className="product-thumbs w-inline-block w-tab-link"
                >
                  <div className="product-thumb-wrapper">
                    <img src="" alt="" className="product-thumb" />
                  </div>
                </a>
              </div>
              <div
                data-w-id="68e7741d-bca5-5b6b-8ae0-814b76734f32"
                className="product-big-image w-tab-content"
              >
                <div
                  data-w-tab="Tab 1"
                  data-w-id="68e7741d-bca5-5b6b-8ae0-814b76734f33"
                  className="product-image-tab w-tab-pane w--tab-active"
                >
                  <img
                    src={product["Main-Variant-Image"]}
                    alt=""
                    className="full-width"
                  />
                </div>
                <div
                  data-w-tab="Tab 2"
                  data-w-id="68e7741d-bca5-5b6b-8ae0-814b76734f34"
                  className="product-image-tab w-tab-pane"
                >
                  <img src="" alt="" className="full-width" />
                </div>
                <div
                  data-w-tab="Tab 3"
                  data-w-id="68e7741d-bca5-5b6b-8ae0-814b76734f35"
                  className="product-image-tab w-tab-pane"
                >
                  <img src="" alt="" className="full-width" />
                </div>
                <div
                  data-w-tab="Tab 4"
                  data-w-id="0d1db96b-6807-d3c4-d07b-7740644c8353"
                  className="product-image-tab w-tab-pane"
                >
                  <img src="" alt="" className="full-width" />
                </div>
                <div
                  data-w-tab="Tab 5"
                  data-w-id="e8bbb5ab-0430-c24e-6d3e-818f8984f537"
                  className="product-image-tab w-tab-pane"
                >
                  <img src="" alt="" className="full-width" />
                </div>
                <div
                  data-w-tab="Tab 6"
                  data-w-id="5c5c3e9a-7a09-ccd9-b3df-213b069e773e"
                  className="product-image-tab w-tab-pane"
                >
                  <img src="" alt="" className="full-width" />
                </div>
              </div>
            </div>
            <div className="product-info">
              {/* // product Zoom Code was here */}
              {product.sku && (
                <div className="product-top-info">
                  <div>SKU: </div>
                  <div></div>
                </div>
              )}
              <h1 className="product-name">{product["Product-Name"]}</h1>
              <p className="text-grey">{product["Product-Description"]}</p>
              <div className="product-price">
                <div>{product["Variant-Price"]}</div>
                <div className="product-old-price"></div>
              </div>
              <div>
                <form
                  data-node-type="commerce-add-to-cart-form"
                  className="w-commerce-commerceaddtocartform add-to-cart-wrapper"
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
              {groupedProducts.length ? (
                groupedProducts.slice(0, 8).map((prod, id) => {
                  return <ProductCardHome product={prod} key={id} />;
                })
              ) : (
                <div className="w-dyn-empty">
                  <div>No items found.</div>
                </div>
              )}
            </div>
          </div>
          <div className="flex-center">
            <a
              href="shop.html"
              data-w-id="ec60f7dc-9af4-0f54-4a05-cc97f5576fd5"
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
};

export default ProductPage;

export async function getStaticPaths() {
  // Get all the product handles
  const productHandles = products.products.map(
    (product) => product["Product-Handle"]
  );

  // Return the paths to all the product pages
  return {
    paths: productHandles.map((handle) => ({ params: { handle } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Find the product with the matching handle
  const product = products.products.find((product) => {
    return product["Product-Handle"] === params.handle;
  });

  // Return the product data as props
  return {
    props: {
      product,
    },
  };
}
