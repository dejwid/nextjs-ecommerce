import React from "react";
import CategoriesBlock from "./CategoriesBlock";
import FeaturedBlock from "./FeaturedBlock";

const ShopSidebar = ({ categories, groupedProducts }) => {
  return (
    <div className="shop-sidebar">
      <CategoriesBlock categories={categories} />
      <FeaturedBlock groupedProducts={groupedProducts} />
    </div>
  );
};

export default ShopSidebar;
