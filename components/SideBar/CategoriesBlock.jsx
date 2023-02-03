import React from "react";
import Link from "next/link";

const CategoriesBlock = ({ categories }) => {
  return (
    <div className="sidebar-block">
      <h4 className="sidebar-block-heading">Categories</h4>
      <div className="sidebar-links">
        <Link href="/shop">
          <a aria-current="page" className="sidebar-link w--current">
            All Products
          </a>
        </Link>
        <div className="w-dyn-list">
          <div role="list" className="sidebar-links w-dyn-items">
            {categories.length > 0 ? (
              categories.map((category, id) => {
                return (
                  <div key={id} role="listitem" className="w-dyn-item">
                    <Link href={category.href}>
                      <div className="sidebar-link">{category.name}</div>
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
  );
};

export default CategoriesBlock;
