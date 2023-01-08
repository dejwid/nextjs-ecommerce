import React from "react";

function LatestPostsHome() {
  return (
    <div className="section no-padding-top wf-section">
      <div className="wrapper">
        <div className="intro">
          <div className="title">
            <span className="text-color">Explore</span> the Blog
          </div>
          <h2>Latest Posts &amp; Updates</h2>
          <div className="divider"></div>
        </div>
        <div
          data-w-id="78d87d3a-53b1-0391-df48-d1795326b6af"
          style={{ opacity: 0 }}
          className="full-width w-dyn-list"
        >
          <div role="list" className="posts no-margin-bottom w-dyn-items">
            <div role="listitem" className="post-item w-dyn-item">
              <div className="post-card">
                <a href="#" className="post-card-preview w-inline-block">
                  <div className="zoomed-image"></div>
                </a>
                <div className="post-card-content">
                  <div className="post-card-date-block">
                    <div className="post-card-date"></div>
                    <div className="post-card-month"></div>
                  </div>
                  <div className="post-card-info">
                    <div className="post-card-category hide">
                      <div>Published in </div>
                      <a href="#" className="link-color"></a>
                    </div>
                    <a href="#" className="link-dark w-inline-block">
                      <h4 className="post-card-heading"></h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-dyn-empty">
            <div>No items found.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestPostsHome;
