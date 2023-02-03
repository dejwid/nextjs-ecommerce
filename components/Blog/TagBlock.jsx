import Link from "next/link";
import React from "react";

const TagBlock = ({ tags }) => {
  return (
    <div className="sidebar-block">
      <h4 className="sidebar-heading">Tags</h4>
      <div className="w-dyn-list">
        <div role="list" className="sidebar-tags w-dyn-items">
          {tags.length > 0 ? (
            tags.map((tag, id) => {
              return (
                <div key={id} role="listitem" className="w-dyn-item">
                  <Link href="#">
                    <div className="tag w-inline-block">
                      <div>{tag}</div>
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
  );
};

export default TagBlock;
