import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/Image";
import { useRouter } from "next/router";
import products from "../../data/products.json";
import Navigation from "../../components/Navigation/Navigation";
import FooterNew from "../../components/LayoutComponents/FooterNew";
import ProductCardHome from "../../components/ProductCard/ProductCardHome";
import HeaderIntro from "../../components/HeaderIntro/HeaderIntro";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import AddToCartForm from "../../components/Forms/AddToCartForm";
import ProductThumbs from "../../components/Product/ProductThumbs";
import ProductBigImage from "../../components/Product/ProductBigImage";

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
          <Breadcrumbs page="products" url="/" />
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
              <ProductThumbs product={product} images={product.image || []} />
              <ProductBigImage product={product} />
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
                <AddToCartForm />
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
            <Link href={`/shop`}>
              <div className="button green-shost w-inline-block">
                See All Products
              </div>
            </Link>
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
