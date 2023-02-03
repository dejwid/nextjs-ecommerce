import React from "react";
import Link from "next/link";

const FeaturedPosts = ({ blogPosts }) => {
  return (
    <div className="sidebar-block">
      <h4 className="sidebar-heading">Featured Posts</h4>
      {blogPosts.length > 0 ? (
        <div role="list" className="w-dyn-list">
          <div className="w-dyn-items">
            {blogPosts.map((post, id) => {
              return (
                <div key={id} role="listitem" className="w-dyn-item">
                  <Link href="#">
                    <div className="sidebar-featured-post w-inline-block">
                      <div
                        className="sidebar-post-image"
                        style={{
                          backgroundImage: `url(${post["Thumbnail"]})`,
                        }}
                      ></div>
                      <div className="sidebar-post-info">
                        <div className="sidebar-post-date">Jan 18, 2023</div>
                        <div className="sidebar-post-heading">
                          {post["Name"]}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="w-dyn-empty">
          <div>No items found.</div>
        </div>
      )}
    </div>
  );
};

export default FeaturedPosts;
