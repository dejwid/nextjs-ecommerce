import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/Image";
import blogPosts from "../data/blogPosts.json";
import NavStatic from "../components/Navigation/NavStatic";
import InstagramSection from "../components/LayoutComponents/InstagramSection";
import FooterNew from "../components/LayoutComponents/FooterNew";
import InnerHero from "../components/Hero/InnerHero";
import HeaderIntro from "../components/HeaderIntro/HeaderIntro";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Pagination from "../components/Pagination/Pagination";
import FeaturedPosts from "../components/Blog/FeaturedPosts";
import TagBlock from "../components/Blog/TagBlock";
import MailingList from "../components/MailingList/MailingList";
import SidebarBlock from "../components/Blog/SidebarBlock";

function blog(props) {
  return (
    <div className="page-wrapepr">
      <NavStatic />
      <div
        id="Hero"
        data-w-id="b30bc5a5-d09c-9b28-a7ad-9ca6aca82bbd"
        className="section page-header wf-section"
      >
        <div className="wrapper page-header-wrapper">
          <HeaderIntro
            title={"Recent Posts"}
            subTitleMain={`Blog's & Articles`}
            subTitleHighlight={"Three Sisters Boutique"}
          />
          <Breadcrumbs page="blog" url="/blog" />
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
              {/* <Pagination /> */}
            </div>
            <div className="blog-sidebar">
              <FeaturedPosts blogPosts={blogPosts} />
              <TagBlock tags={props.tags || []} />
              <MailingList />
              <SidebarBlock />
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
