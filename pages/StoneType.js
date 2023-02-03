import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavStatic from "../components/Navigation/NavStatic";
import products from "../data/products.json";
import stoneTypes from "../data/stoneTypes.json";
import InstagramSection from "../components/LayoutComponents/InstagramSection";
import FooterNew from "../components/LayoutComponents/FooterNew";

function StoneType(props) {
  const [prodList, setProdList] = useState(products.products);
  const [categories, setCategories] = useState([]);
  const [groupedProducts, setgroupedProducts] = useState([]);

  useEffect(() => {
    let categories = [];
    let groupedProducts = [];

    if (props?.stoneTypes) {
      setProdList(props.stoneTypes);
      setgroupedProducts(props.stoneTypes);
    }
  }, [props]);

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
    <div className="page-type">
      <NavStatic />
      <div
        id="Hero"
        data-w-id="c8084a22-7dd0-1154-15b7-eb387c2594a7"
        className="section page-header wf-section"
      >
        <div className="wrapper">
          <div className="header-intro">
            <div className="post-category">
              <div className="title">Search by</div>
            </div>
            <h1 className="post-page-heading">Stone &amp; Crystal type</h1>
            <div className="divider"></div>
          </div>
          <div className="breadcrumbs">
            <Link href="/">
              <a className="link-dark">Home</a>
            </Link>
            <Image
              layout="fill"
              objectFit="contain"
              src="images/right.svg"
              alt=""
              className="breadcrumbs-divider"
            />
            <Link href="/blog">
              <a className="link-dark">Blog</a>
            </Link>
            <Image
              layout="fill"
              objectFit="contain"
              src="images/right.svg"
              alt=""
              className="breadcrumbs-divider"
            />
            <Link href="/stone-type">
              <a className="link-dark">Stone Type</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="section wf-section">
        <div className="wrapper">
          <div className="blog">
            <div className="blog-posts-wrapper w-dyn-list">
              {stoneTypes.length > 1 ? (
                stoneTypes.map((stoneType, id) => {
                  return (
                    <div key={id} role="list" className="w-dyn-items">
                      <div
                        role="listitem"
                        className="blog-post-item w-dyn-item"
                      >
                        <div className="post-card"></div>
                        <a
                          href="#"
                          className="stone-type-wrapper w-inline-block"
                        >
                          <div
                            className="stone-type-image"
                            style={{
                              // background image
                              backgroundImage: `url(${stoneType["Main-Image"]})`,
                            }}
                          ></div>
                          <div className="stone-sype-post-info">
                            <h3 className="post-card-heading">
                              {stoneType["Name"]}
                            </h3>
                            <div>{stoneType["Short-Description"]}</div>
                            <div className="stone-text-link">
                              Continue Reading:
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="w-dyn-empty">
                  <div>No items found.</div>
                </div>
              )}
            </div>
            <div className="blog-sidebar">
              <div className="sidebar-block">
                <h4 className="sidebar-heading">Product Categories</h4>
                <Link href="/shop">
                  <a className="sidebar-category">All Products</a>
                </Link>
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    {categories.length > 1 ? (
                      categories.map((category, id) => {
                        return (
                          <div key={id} role="listitem" className="w-dyn-item">
                            <a
                              href={category.href}
                              className="sidebar-category"
                            >
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
              <div className="sidebar-block">
                <h4 className="sidebar-heading">Featured Posts</h4>
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <a
                        href="#"
                        className="sidebar-featured-post w-inline-block"
                      >
                        <div className="sidebar-post-image"></div>
                        <div className="sidebar-post-info">
                          <div className="sidebar-post-date"></div>
                          <div className="sidebar-post-heading"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="w-dyn-empty">
                    <div>No items found.</div>
                  </div>
                </div>
              </div>
              <div className="sidebar-block">
                <h4 className="sidebar-heading">
                  Join Our Mailing List &amp; Get{" "}
                  <span className="text-color">Special Discounts</span>
                </h4>
                <div className="full-width w-form">
                  <form
                    id="wf-form-Sidebar-Subscribe-Form"
                    name="wf-form-Sidebar-Subscribe-Form"
                    data-name="Sidebar Subscribe Form"
                    method="get"
                    className="sidebar-subscribe-form"
                  >
                    <div className="full-width-input-wrapper">
                      <Image
                        layout="fill"
                        objectFit="contain"
                        src="images/at-sign.svg"
                        alt=""
                        className="input-icon"
                      />
                      <input
                        type="email"
                        className="input icon-input w-input"
                        maxlength="256"
                        name="Sidebar-Subscribe"
                        data-name="Sidebar Subscribe"
                        placeholder="Email address"
                        id="Sidebar-Subscribe"
                        required=""
                      />
                    </div>
                    <input
                      type="submit"
                      value="Subscribe"
                      data-wait="Please wait..."
                      className="button w-button"
                    />
                    <div className="form-text-small">
                      We never share your info. View our{" "}
                      <Link href="faq">
                        <a className="link-dark">Privacy Policy</a>
                      </Link>
                    </div>
                  </form>
                  <div className="default-message text-left w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="error-message w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-block sticky">
                <Link href="/shop">
                  <a className="banner w-inline-block">
                    <div className="banner-header">
                      <div className="title small-title">
                        <span className="text-color">New</span> Arrivals
                      </div>
                      <h5>Explore Our Shop</h5>
                    </div>
                    <div className="banner-image-wrapper">
                      <Image
                        layout="fill"
                        objectFit="contain"
                        src="images/5.png"
                        alt=""
                        className="full-width"
                      />
                      <div className="button banner-button">
                        <div className="button-icon-wrapper w-clearfix">
                          <Image
                            layout="fill"
                            objectFit="contain"
                            src="images/cart.svg"
                            alt=""
                            className="button-icon left"
                          />
                        </div>
                        <div>Shop Now</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe">
          <div className="title">
            Want <span className="text-color">special</span>{" "}
            <span className="text-color">offers</span> from us?
            <span className="text-color"></span>
          </div>
          <h2>Join Our Maling List</h2>
          <div className="full-width w-form">
            {/* <form
              id="wf-form-Subscribe-Form"
              name="wf-form-Subscribe-Form"
              data-name="Subscribe Form"
              method="get"
              className="subscribe-form"
            >
              <div className="subscribe-input-wrapper">
                <Image
                  layout="fill"
                  objectFit="contain"
                  src="images/at-sign.svg"
                  alt=""
                  className="input-icon"
                />
                <input
                  type="email"
                  className="input subscribe-input w-input"
                  maxlength="256"
                  name="Subscribe-Email-2"
                  data-name="Subscribe Email 2"
                  placeholder="Email address"
                  id="Subscribe-Email-2"
                  required=""
                />
              </div>
              <input
                type="submit"
                value="Subscribe"
                data-wait="Please wait..."
                className="button subscribe-button w-button"
              />
              <div className="form-text-small hide">
                We never share your info. View our{" "}
                <Link href="faq">
                  <a href="faq.html" className="link-dark">
                    Privacy Policy
                  </a>
                </Link>
              </div>
            </form> */}
            <div className="default-message w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="error-message w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
      <InstagramSection />
      <FooterNew />
    </div>
  );
}

export default StoneType;
