import React from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "../public/images/category-essential-oils.jpg";
import img2 from "../public/images/category-necklaces.jpg";
import img3 from "../public/images/category-bracelets.png";
import img4 from "../public/images/category-misc.png";

const categoryName = ["Necklaces", "Bracelets", "Essential Oils", "Misc"];

function CategoriesHome(props) {
  // I SHOULD LOOP OVER THE DATA ONCE AND PUT
  // EACH CATEGORY INTO ITS OWN THING INSTEAD OF
  // LOOP OVER THEM ALL 4 TIMES. I WILL GET AROUND TO THIS ONE DAY
  return (
    <div className="section border-top wf-section">
      <div className="wrapper">
        <div className="categories-wrapper">
          <div className="categories-intro">
            <div className="categories-icon">
              <Image
                src="/images/arrow-right-circle.svg"
                alt=""
                width={40}
                height={40}
              />
            </div>
            <div className="categories-heading">Shop by Category</div>
          </div>
          <div className="w-layout-grid categories">
            {props.data.map((category, id) => {
              if (category.name === "Essential Oils") {
                return (
                  <div
                    key={id}
                    id="w-node-_81d6df67-bf2e-15ef-783b-c5db9581d5e2-d8ea31ae"
                    className="category-wrapper w-dyn-list"
                  >
                    <div role="list" className="full-height w-dyn-items">
                      <div role="listitem" className="full-height w-dyn-item">
                        <a
                          href={category.href}
                          className="category w-inline-block"
                        >
                          <div className="button category-button">
                            <div>{category.name}</div>
                            <div className="button-icon-wrapper w-clearfix">
                              <Image
                                src="/images/arrow-right.svg"
                                alt=""
                                className="button-icon right"
                                width={20}
                                height={20}
                              />
                            </div>
                          </div>
                          <div
                            className="category-image"
                            style={{
                              backgroundImage: `url(${img1.src})`,
                            }}
                          ></div>
                        </a>
                      </div>
                    </div>
                    {/* <div className="w-dyn-empty">
                      <div>No items found.</div>
                    </div> */}
                  </div>
                );
              }
            })}
            {props.data.map((category, id) => {
              if (category.name === "Bracelets") {
                return (
                  <div
                    key={id}
                    id="w-node-_4ecd64ad-4d89-d147-4a65-45ae297c0e99-d8ea31ae"
                    className="category-wrapper w-dyn-list"
                  >
                    <div role="list" className="full-height w-dyn-items">
                      <div role="listitem" className="full-height w-dyn-item">
                        <a
                          href={category.href}
                          className="category w-inline-block"
                        >
                          <div className="button category-button">
                            <div>{category.name}</div>
                            <div className="button-icon-wrapper w-clearfix">
                              <Image
                                src={"/images/arrow-right.svg"}
                                alt=""
                                width={20}
                                height={20}
                                className="button-icon right"
                              />
                            </div>
                          </div>
                          <div
                            className="category-image"
                            style={{
                              backgroundImage: `url(${img3.src})`,
                            }}
                          ></div>
                        </a>
                      </div>
                    </div>
                    {/* <div className="w-dyn-empty">
                      <div>No items found.</div>
                    </div> */}
                  </div>
                );
              }
            })}
            {props.data.map((category, id) => {
              if (category.name === "Necklaces") {
                return (
                  <div
                    key={id}
                    id="w-node-_7f3bdd4c-e27a-4e75-19f7-5259b8504a1b-d8ea31ae"
                    className="category-wrapper w-dyn-list"
                  >
                    <div role="list" className="full-height w-dyn-items">
                      <div role="listitem" className="full-height w-dyn-item">
                        <a
                          href={category.href}
                          className="category w-inline-block"
                        >
                          <div className="button category-button">
                            <div>{category.name}</div>
                            <div className="button-icon-wrapper w-clearfix">
                              <Image
                                src={"/images/arrow-right.svg"}
                                alt=""
                                width={20}
                                height={20}
                                className="button-icon right"
                              />
                            </div>
                          </div>
                          <div
                            className="category-image"
                            style={{
                              backgroundImage: `url(${img2.src})`,
                            }}
                          ></div>
                        </a>
                      </div>
                    </div>
                    {/* <div className="w-dyn-empty">
                      <div>No items found.</div>
                    </div> */}
                  </div>
                );
              }
            })}
            {props.data.map((category, id) => {
              if (category.name === "Misc") {
                return (
                  <div
                    key={id}
                    id="w-node-_7fa269ac-3274-6667-3288-a68ddf5793af-d8ea31ae"
                    className="category-wrapper w-dyn-list"
                  >
                    <div role="list" className="full-height w-dyn-items">
                      <div role="listitem" className="full-height w-dyn-item">
                        <a
                          href={category.href}
                          className="category w-inline-block"
                        >
                          <div className="button category-button">
                            <div>{category.name}</div>
                            <div className="button-icon-wrapper w-clearfix">
                              <Image
                                src="/images/arrow-right.svg"
                                alt=""
                                width={20}
                                height={20}
                                className="button-icon right"
                              />
                            </div>
                          </div>
                          <div
                            className="category-image"
                            style={{
                              backgroundImage: `url(${img4.src})`,
                            }}
                          ></div>
                        </a>
                      </div>
                    </div>
                    {/* <div className="w-dyn-empty">
                      <div>No items found.</div>
                    </div> */}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesHome;
