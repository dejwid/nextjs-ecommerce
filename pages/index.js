import { useEffect, useState } from "react";
import Product from "../components/Product";
import { initMongoose } from "../lib/mongoose";
import { findAllProducts } from "./api/products";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation/Navigation";
import PopUpSubscribe from "../components/PopUpSubscribe";
import Hero from "../components/Hero/Hero";
import CategoriesHome from "../components/CategoriesHome";
import BestSellersHome from "../components/BestSellersHome";
import PromoHome from "../components/PromoHome";
import SubscribeSectionHome from "../components/SubscribeSectionHome";
import LatestPostsHome from "../components/LatestPostsHome";
import InstagramSection from "../components/InstagramSection";
import productsJson from "../data/products.json";

export default function Home({ products }) {
  const [categories, setCategories] = useState([]);
  const [groupedProducts, setgroupedProducts] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  const [phrase, setPhrase] = useState("");

  const categoriesNames = [...new Set(products.map((p) => p.category))];

  if (phrase) {
    products = products.filter((p) => p.name.toLowerCase().includes(phrase));
  }

  let productData = productsJson.products;

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
    <Layout>
      <Navigation />
      <PopUpSubscribe />
      <Hero />
      <CategoriesHome data={categories} />
      <BestSellersHome data={groupedProducts} />
      <PromoHome />
      {/* <SubscribeSectionHome /> */}
      {/* <LatestPostsHome /> */}
      <InstagramSection />
      {/* <input
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        type="text"
        placeholder="Search for products..."
        className="bg-gray-200 w-full py-2 px-4 rounded-xl"
      />
      <div>
        {categoriesNames.map((categoryName) => (
          <div key={categoryName}>
            {products.find((p) => p.category === categoryName) && (
              <div>
                <h2 className="text-2xl py-5 capitalize">{categoryName}</h2>
                <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                  {products
                    .filter((p) => p.category === categoryName)
                    .map((productInfo) => (
                      <div key={productInfo._id} className="px-5 snap-start">
                        <Product {...productInfo} />
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div> */}
    </Layout>
  );
}

export async function getServerSideProps() {
  await initMongoose();
  const products = await findAllProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
