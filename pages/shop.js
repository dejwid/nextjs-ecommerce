import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import FooterNew from "../components/LayoutComponents/FooterNew";
import InstagramSection from "../components/LayoutComponents/InstagramSection";
import NavStatic from "../components/Navigation/NavStatic";
import products from "../data/products.json";
import ProductCardHome from "../components/ProductCard/ProductCardHome";
import InnerHero from "../components/Hero/InnerHero";
import HeaderIntro from "../components/HeaderIntro/HeaderIntro";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

function Shop() {
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
      <NavStatic />
      <InnerHero />
      <div
        id="Hero"
        data-w-id="b30bc5a5-d09c-9b28-a7ad-9ca6aca82bbd"
        className="section page-header wf-section"
      >
        <div className="wrapper page-header-wrapper">
          <HeaderIntro />
          <Breadcrumbs />
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
                              <Link href={category.href}>
                                <div className="sidebar-link">
                                  {category.name}
                                </div>
                              </Link>
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
      <InstagramSection />
      <FooterNew />
    </div>
  );
}

export default Shop;
