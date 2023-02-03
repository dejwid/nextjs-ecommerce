import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/Image";
import blogPosts from "../data/blogPosts.json";
import NavStatic from "../components/Navigation/NavStatic";
import InstagramSection from "../components/LayoutComponents/InstagramSection";
import FooterNew from "../components/LayoutComponents/FooterNew";

function blog(props) {
  //   const data = JSON.parse(blogPosts);
  // const [blogPostsArr, setBlogPostsArr] = useState(blogPosts);
  // const [day, setDay] = useState("");
  // const [monthYear, setMonthYear] = useState("");

  // useEffect(() => {
  //   if (blogPosts.length > 0) {
  //     setBlogPostsArr(blogPosts);
  //   }
  // }, [blogPosts]);

  //   const extractDateInfo = (dateString) => {
  //     const date = new Date(dateString);
  //     const day = date.getDate();
  //     const month = date.getMonth() + 1;
  //     const year = date.getFullYear();
  //     const monthYear = `${month} ${year}`;
  //     if (setDay !== day) {
  //       setDay(day);
  //     }
  //     if (setMonthYear !== monthYear) {
  //       setMonthYear(monthYear);
  //     }
  //     return { day, monthYear };
  //   };

  return (
    <div className="page-wrapepr">
      <NavStatic />
      <div
        id="Hero"
        data-w-id="3f468f7e-5bbc-0b81-8f27-6307c2e93e86"
        className="section page-header wf-section"
      >
        <div className="wrapper page-header-wrapper">
          <div className="header-intro">
            <div className="title">
              <span className="text-color">Three Sisters Boutique</span>{" "}
              Blog&#x27;s &amp; Articles
            </div>
            <h1 className="page-heading">Recent Posts</h1>
            <div className="divider color"></div>
          </div>
          <div className="breadcrumbs">
            <Link href="/">
              <a className="link-dark">Home</a>
            </Link>
            <Image
              src="/images/right.svg"
              alt=""
              width={10}
              height={10}
              className="breadcrumbs-divider"
            />
            <div>Blog</div>
          </div>
        </div>
      </div>
      <div className="section wf-section">
        <div className="wrapper">
          <div className="blog">
            <div className="blog-posts-wrapper w-dyn-list">
              <div role="list" className="w-dyn-items">
                {blogPosts.length > 1 ? (
                  blogPosts.map((post, id) => {
                    return (
                      <div
                        key={id}
                        role="listitem"
                        className="blog-post-item w-dyn-item"
                      >
                        <div className="post-card">
                          <Link href={`blog/${post["Slug"]}`}>
                            <a
                              href="#"
                              className="post-card-preview big w-inline-block"
                            >
                              <div
                                className="zoomed-image"
                                style={{
                                  backgroundImage: `url(${post["Full-Size-Image"]})`,
                                }}
                              ></div>
                            </a>
                          </Link>
                          <div className="post-card-content big">
                            <div className="post-card-date-block">
                              <div className="post-card-date">15</div>
                              <div className="post-card-month">Jun 2022</div>
                            </div>
                            <div className="post-card-info">
                              <div className="post-card-category">
                                <div>Published in {post.Category}</div>
                                <Link href={`blog/${post["Slug"]}`}>
                                  <a className="link-color">
                                    {post["Sub-Category"] || "Nothing Here"}
                                  </a>
                                </Link>
                              </div>
                              <Link href={`blog/${post["Slug"]}`}>
                                <a className="link-dark w-inline-block">
                                  <h3 className="post-card-heading">
                                    {post.Name}
                                  </h3>
                                </a>
                              </Link>
                            </div>
                          </div>
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
              {/* <div
                role="navigation"
                aria-label="List"
                className="w-pagination-wrapper pagination"
              >
                <div className="pagination-left">
                  <a
                    data-w-id="b0203fec-81be-377d-d9e6-38cd0e377376"
                    href="#"
                    aria-label="Previous Page"
                    className="w-pagination-previous button ghost"
                  >
                    <div
                      data-w-id="f9c3e698-97f0-a37f-efdd-36cd46e58457"
                      className="button-icon-wrapper"
                    >
                      <Image
                        layout='fill'
                        objectFit='contain'
                        src="images/arrow-left-white.svg"
                        alt=""
                        className="button-icon left"
                      />
                    </div>
                    <div className="w-inline-block">Previous</div>
                  </a>
                </div>
                <div
                  aria-label="Page 1 of 1"
                  role="heading"
                  className="w-page-count page-count"
                ></div>
                <div className="pagination-right">
                  <a
                    data-w-id="b0203fec-81be-377d-d9e6-38cd0e37737a"
                    href="#"
                    aria-label="Next Page"
                    className="w-pagination-next button ghost border"
                  >
                    <div className="w-inline-block">Next</div>
                    <div
                      data-w-id="3d763877-d923-aa07-51aa-835965d8ccbd"
                      className="button-icon-wrapper w-clearfix"
                    >
                      <Image
                        layout='fill'
                        objectFit='contain'
                        src="images/arrow-right-white.svg"
                        alt=""
                        className="button-icon right"
                      />
                    </div>
                  </a>
                </div>
              </div> */}
            </div>
            <div className="blog-sidebar">
              <div className="sidebar-block">
                <h4 className="sidebar-heading">Featured Posts</h4>
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    {blogPosts.length > 1 ? (
                      blogPosts.map((post, id) => {
                        return (
                          <div key={id} role="listitem" className="w-dyn-item">
                            <a
                              href="#"
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
              <div className="sidebar-block">
                <h4 className="sidebar-heading">Tags</h4>
                <div className="w-dyn-list">
                  <div role="list" className="sidebar-tags w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <a href="#" className="tag w-inline-block">
                        <div></div>
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
                        maxLength="256"
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
                      <Link href="/faq">
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
                      <div
                        style={{
                          WebkitTransform:
                            "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MozTransform:
                            "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MsTransform:
                            "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          transform:
                            "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          opacity: "0",
                        }}
                        className="button banner-button"
                      >
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
      </div>
      <InstagramSection />
      <FooterNew />
    </div>
  );
}

export default blog;
