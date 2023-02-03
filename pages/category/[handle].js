import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import products from "../../data/products.json";
import Navigation from "../../components/Navigation/Navigation";
import FooterNew from "../../components/LayoutComponents/FooterNew";
import blogPosts from "../../data/blogPosts.json";
import ProductCardHome from "../../components/ProductCard/ProductCardHome";
import Pagination from "../../components/Pagination/Pagination";
import HeaderIntro from "../../components/HeaderIntro/HeaderIntro";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ShopSidebar from "../../components/SideBar/ShopSideBar";

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
        data-w-id="b30bc5a5-d09c-9b28-a7ad-9ca6aca82bbd"
        className="section page-header wf-section"
      >
        <div className="wrapper page-header-wrapper">
          <HeaderIntro
            title={category}
            subTitleMain={`Category`}
            subTitleHighlight={"Shop"}
          />
          <Breadcrumbs page="categories" url="/" />
        </div>
      </div>
      <div className="section wf-section">
        <div className="wrapper">
          <div className="shop">
            <ShopSidebar categories={categories} groupedProducts={[]} />
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
              {/* <Pagination /> */}
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
