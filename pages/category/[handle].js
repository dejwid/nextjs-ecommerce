import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import products from "../../data/products.json";
import Navigation from "../../components/Navigation/Navigation";
import FooterNew from "../../components/LayoutComponents/FooterNew";
import blogPosts from "../../data/blogPosts.json";
import ProductCardHome from "../../components/ProductCard/ProductCardHome";

const categoryName = ["necklaces", "bracelets", "essential-oils", "misc"];

function CategoryPage({ category }) {
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
    let productCategory = product["Product-Categories"]
      .split(";")
      .map((c) => c.trim().toLowerCase().replace(/ /g, "-"));
    let productDescription = product["Product-Description"];
    let bestSeller = product["Best-Seller"];
    let groupExists = false;

    if (productCategory.includes(handle)) {
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
            href: `/category/${category
              .trim()
              .toLowerCase()
              .replace(/ /g, "-")}`,
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
  }

  return (
    <div className="page-wrapper">
      <Navigation />
      <div
        id="Hero"
        data-w-id="34d34d98-7d59-6854-3331-6d6ac0d7e628"
        className="section page-header wf-section"
      >
        <div className="wrapper page-header-wrapper">
          <div className="header-intro">
            <div className="title">
              <span className="text-color">Shop</span> Category
            </div>
            {
              // make first letter capital of category
            }
            <h1
              className="heading"
              style={{
                textTransform: "capitalize",
              }}
            >
              {handle}
            </h1>
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
            <a href="index.html" className="link-dark">
              Shop
            </a>
            <img
              src="images/right.svg"
              alt=""
              className="breadcrumbs-divider"
            />
            <div>{category}</div>
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
                  <Link href="/shop">
                    <a className="sidebar-link">All Products</a>
                  </Link>
                  <div className="w-dyn-list">
                    <div role="list" className="sidebar-links w-dyn-items">
                      {categoryName.length > 1 ? (
                        categoryName.map((category, id) => {
                          return (
                            <div
                              key={id}
                              role="listitem"
                              className="w-dyn-item"
                            >
                              <a
                                href={`/category/${category}`}
                                className="sidebar-link"
                              >
                                {category}
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
                    <div role="list" className="w-dyn-items">
                      {blogPosts.length > 1 ? (
                        blogPosts.map((post, id) => {
                          console.log(post);
                          return (
                            <div
                              key={id}
                              role="listitem"
                              className="w-dyn-item"
                            >
                              <a
                                href={`/blog/${post["Slug"]}`}
                                className="sidebar-featured-post w-inline-block"
                              >
                                <div
                                  className="sidebar-post-image"
                                  style={{
                                    backgroundImage: `url(${post["Thumbnail"]})`,
                                  }}
                                ></div>
                                <div className="sidebar-post-info">
                                  <div className="sidebar-post-date"></div>
                                  <div className="sidebar-post-heading">
                                    {post["Name"]}
                                  </div>
                                </div>
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
            </div>
            <div className="shop-products w-dyn-list">
              <div
                role="list"
                className="products no-margin-bottom w-dyn-items"
              >
                {groupedProducts.length ? (
                  groupedProducts.map((prod, id) => {
                    return (
                      <ProductCardHome
                        setWidth={"33%"}
                        product={prod}
                        key={id}
                      />
                    );
                  })
                ) : (
                  <div className="default-message w-dyn-empty">
                    <div>No items in this category.</div>
                  </div>
                )}
              </div>

              {/* <div
                role="navigation"
                aria-label="List"
                className="w-pagination-wrapper pagination"
              >
                <div className="pagination-left">
                  <a
                    data-w-id="ce335ec2-cfa8-240a-375f-3c8717c695c2"
                    href="#"
                    aria-label="Previous Page"
                    className="w-pagination-previous button ghost"
                  >
                    <div
                      data-w-id="ce335ec2-cfa8-240a-375f-3c8717c695c3"
                      className="button-icon-wrapper"
                    >
                      <img
                        src="images/arrow-left-white.svg"
                        alt=""
                        className="button-icon left"
                      />
                    </div>
                    <div className="dark w-inline-block">Prev</div>
                  </a>
                </div>
                <div
                  aria-label="Page 1 of 1"
                  role="heading"
                  className="w-page-count page-count"
                ></div>
                <div className="pagination-right">
                  <a
                    data-w-id="ce335ec2-cfa8-240a-375f-3c8717c695c9"
                    href="#"
                    aria-label="Next Page"
                    className="w-pagination-next button ghost"
                  >
                    <div className="dark w-inline-block">Next</div>
                    <div
                      data-w-id="ce335ec2-cfa8-240a-375f-3c8717c695cc"
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
      </div>
      <FooterNew />
    </div>
  );
}

export default CategoryPage;

export async function getStaticPaths() {
  // Get all the category handles
  const categoryHandles = categoryName.map((category) => category);

  // Return the paths to all the category pages
  return {
    paths: categoryHandles.map((handle) => ({ params: { handle } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Find the category with the matching handle
  const category = categoryName.find((category) => {
    return category === params.handle;
  });

  // Return the category data as props
  return {
    props: {
      category,
    },
  };
}
